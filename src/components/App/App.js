import { AppStyle, errorMessage } from "./styles.module.css";
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import ImageGallery from "../ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Modal from "../Modal";
import fetchImages from "../services/image-api";
import LoaderApp from "../Loader";

const INITIAL_STATE = {
  query: "",
  images: [],
  perPage: 9,
  page: 1,
  modalImage: "",
  isLoading: false,
  modalShow: false,
  error: "",
};
class App extends Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }
  state = {
    ...INITIAL_STATE,
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Добавляются ли в список новые элементы?
    // Запоминаем значение прокрутки, чтобы использовать его позже.
    if (prevState.images.length < this.state.images.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(PrevProps, { query }, snapshot) {
    if (this.state.query !== query) {
      // console.log("componentDidUpdate state change?=", query !== one);
      this.setState({ isLoading: true });
      fetchImages(this.state)
        .then(({ hits }) => {
          this.growthArrayOfImages(hits);
          // this.setState({
          //   images: [...this.state.images, ...hits],
          //   page: this.state.page + 1,
          // });
        })
        .catch((error) => {
          console.log("error", error);
          this.setState({ error: true });
        })
        .finally(() => this.setState({ isLoading: false }));
    }

    if (snapshot !== null) {
      window.scrollTo({
        top: snapshot - 170,
        behavior: "smooth",
      });
    }
  }

  growthArrayOfImages(hits) {
    this.setState({
      images: [...this.state.images, ...hits],
      page: this.state.page + 1,
    });
  }

  formSubmit = ({ query }) => {
    if (this.state.query !== query) {
      this.setState({
        ...INITIAL_STATE,
        query: query,
      });
    }
  };

  getImagesHandler = () => {
    // console.log("button pressed");
    this.setState({ isLoading: true });
    fetchImages(this.state)
      .then(({ hits }) => {
        this.growthArrayOfImages(hits);
        // this.setState({
        //   images: [...this.state.images, ...hits],
        //   page: this.state.page + 1,
        // });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  ImageItemClickHandler = (ItemUrl) => {
    this.setState({ modalImage: ItemUrl });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
  };
  render() {
    const { error, images, isLoading, modalShow, modalImage } = this.state;
    const willBeButtonShow = images.length > 0 && !isLoading && !error;

    return (
      <div className={AppStyle} ref={this.listRef}>
        <SearchBar onSubmit={this.formSubmit} />
        {error && (
          <p className={errorMessage}>
            Oops, there was an unexpected error, please try again.
          </p>
        )}
        <ImageGallery>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              url={webformatURL}
              modalUrl={largeImageURL}
              onClick={this.ImageItemClickHandler}
            />
          ))}
        </ImageGallery>
        {isLoading && <LoaderApp />}
        {willBeButtonShow && <Button onClick={this.getImagesHandler} />}
        {modalShow && <Modal url={modalImage} onClick={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
