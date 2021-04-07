import { Component } from "react";
import { ButtonStyle } from "./styles.module.css";

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={ButtonStyle}
        onClick={() => this.props.onClick()}
      >
        Load more
      </button>
    );
  }
}

export default Button;
