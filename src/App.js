import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";
import fetchImages from "./components/services/image-api";

class App extends Component {
  state = {
    query: "",
    images: [],
    perPage: 9,
    page: 1,
  };
  componentDidUpdate(prevState) {
    // if (this.state.query !== prevState.query) {
    //   console.log(
    //     "componentDidUpdate state change?=",
    //     this.state.query !== prevState.query
    //   );
    // }
  }
  formSubmit = ({ query }) => {
    if (this.state.query !== query) {
      fetchImages(query, this.state).then(({ hits }) => {
        // console.dir(hits);
        this.setState({
          query: query,
          images: [...hits],
        });
      });
    }
    // this.setState({ query: query });
  };

  render() {
    return (
      <div className="App">
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
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
