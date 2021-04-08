import { AppStyle } from "./styles.module.css";
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import ImageGallery from "../ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Modal from "../Modal";
import fetchImages from "../services/image-api";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import LoaderApp from "../Loader";
class App extends Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }
  state = {
    query: "",
    images: [],
    perPage: 9,
    page: 1,
    modalImage: "",
    length: 0,
    isLoading: false,
    modalShow: false,
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Добавляются ли в список новые элементы?
    // Запоминаем значение прокрутки, чтобы использовать его позже.
    if (prevState.length < this.state.length) {
      // console.log(
      //   "getSnapShot IF Active|| prevState.length < this.state.length",
      //   prevState.length < this.state.length
      // );
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    // console.log(
    //   "getSnapShot IF NOT Active|| prevState.length < this.state.length",
    //   prevState.length < this.state.length
    // );
    // console.log(
    //   "IN getSnapshotBeforeUpdate prevState.length",
    //   prevState.length
    // );
    // console.log(
    //   "IN getSnapshotBeforeUpdate this.state.length",
    //   this.state.length
    // );
    return null;
  }

  componentDidUpdate(PrevProps, { query }, snapshot) {
    if (this.state.query !== query) {
      // console.log("componentDidUpdate state change?=", query !== one);
      this.setState({ isLoading: true });
      fetchImages(this.state)
        .then(({ hits }) => {
         
          this.setState({
            images: [...this.state.images, ...hits],
            page: this.state.page + 1,
          });
        })
        .then((data) => {
          const list = this.listRef.current;
          console.log("list", list);
          if (list.scrollHeight > 0) {
            this.setState({
              length: list.scrollHeight,
            });
          }
        })
        .finally(() => this.setState({ isLoading: false }));
    }
    console.log("componentDidUpdate inner snapshot", snapshot);
    if (snapshot !== null) {
      const list = this.listRef.current;
      console.log("snapshot", snapshot);
      console.log("list.scrollHeight", list.scrollHeight);
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
      this.setState({ length: list.scrollHeight });
    }
  }
  formSubmit = ({ query }) => {
    if (this.state.query !== query) {
      this.setState({
        query: query,
        page: 1,
        images: [],
        largeImages: "",
        length: 0,
        isLoading: false,
      });
    }
  };
  getImagesHandler = () => {
    console.log("button pressed");
    this.setState({ isLoading: true });
    fetchImages(this.state)
      .then(({ hits }) => {
        this.setState({
          images: [...this.state.images, ...hits],
          page: this.state.page + 1,
        });
      })
      .then((data) => {
        const list = this.listRef.current;
        this.setState({
          length: list.scrollHeight,
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  onImageItemClick = (ItemUrl) => {
    this.setState({ modalImage: ItemUrl });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
  };
  render() {
    return (
      <div className="AppStyle" ref={this.listRef}>
        <SearchBar onSubmit={this.formSubmit} />
        <ImageGallery>
          {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              url={webformatURL}
              modalUrl={largeImageURL}
              onClick={this.onImageItemClick}
            />
          ))}
        </ImageGallery>
        {this.state.isLoading && <LoaderApp />}
        {this.state.images.length > 0 && !this.state.isLoading && (
          <Button onClick={this.getImagesHandler} />
        )}
        {this.state.modalShow && (
          <Modal url={this.state.modalImage} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
