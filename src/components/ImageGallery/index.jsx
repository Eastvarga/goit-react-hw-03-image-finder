import { Component } from "react";
import { ImageGalleryStyle } from "./styles.module.css";

class ImageGallery extends Component {
  render() {
    return <ul className={ImageGalleryStyle}>{this.props.children}</ul>;
  }
}

export default ImageGallery;
