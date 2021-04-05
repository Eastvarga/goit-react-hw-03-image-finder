import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";
class App extends Component {
  state = {
    query: "",
  };
  formSubmit = ({ query }) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.formSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
