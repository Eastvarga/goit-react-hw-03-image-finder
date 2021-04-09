import { Component } from "react";
import { ButtonStyle } from "./styles.module.css";
import PropTypes from "prop-types";
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
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
