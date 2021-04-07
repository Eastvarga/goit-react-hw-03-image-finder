import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";
import fetchImages from "./components/services/image-api";

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
    largeImages: "",
    length: 0,
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
      fetchImages(this.state)
        .then(({ hits }) => {
          // console.log(
          //   "IF --this.listRef.current.scrollHeight",
          //   this.listRef.current.scrollHeight
          // );
          // console.log(
          //   "IF --this.listRef.current.scrollTop",
          //   this.listRef.current.scrollTop
          // );
          // console.log(
          //   "IF  componentDidUpdate --this.listRef.current.scrollHeight",
          //   this.listRef.current.scrollHeight
          // );

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
        });
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
      });
    }
  };
  getImagesHandler = () => {
    console.log("button pressed");
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
      });
  };

  render() {
    return (
      <div className="App" ref={this.listRef}>
        <SearchBar onSubmit={this.formSubmit} />
        <ImageGallery>
          {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              url={webformatURL}
              modalUrl={largeImageURL}
            />
          ))}
        </ImageGallery>
        {this.state.images.length > 0 && (
          <Button onClick={this.getImagesHandler} />
        )}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
