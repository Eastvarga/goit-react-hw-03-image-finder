import { Component } from "react";
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./styles.module.css";

const INITIAL_STATE = {
  query: "",
};

class SearchBar extends Component {
  state = {
    query: "",
  };
  inputHandler = (event) => {
    this.setState({ query: event.target.value });
  };
  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();
  };
  //   reset() {
  //     this.setState({ ...INITIAL_STATE });
  //   }

  render() {
    return (
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={this.formSubmitHandler}>
          <button type="submit" className={SearchFormButton}>
            <span className={SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.inputHandler}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
