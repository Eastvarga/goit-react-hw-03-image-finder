import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

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
        <ImageGallery />
      </div>
    );
  }
}

export default App;
