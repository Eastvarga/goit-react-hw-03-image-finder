import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalStyle, Overlay } from "./styles.module.css";
import PropTypes from "prop-types";
const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.toggleModalHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.toggleModalHandler);
  }
  toggleModalHandler = (event) => {
    // console.log("toggleModalActivate");
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
    if (event.code === "Escape") {
      this.props.onClick();
    }
  };
  render() {
    return createPortal(
      <div className={Overlay} onClick={this.toggleModalHandler}>
        <div className={ModalStyle}>
          <img src={this.props.url} alt={this.props.url} />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
export default Modal;
