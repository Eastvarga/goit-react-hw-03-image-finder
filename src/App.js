import { Component } from "react";
import SearchBar from "./components/SearchBar";
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
      </div>
    );
  }
}

export default App;
