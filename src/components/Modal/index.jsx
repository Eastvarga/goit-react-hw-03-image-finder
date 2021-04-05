import { Component } from "react";
import { ModalStyle, Overlay } from "./styles.module.css";
class Modal extends Component {
  render() {
    return (
      <div className={Overlay}>
        <div className={ModalStyle}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
