import { Component } from "react";
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from "./styles.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={ImageGalleryItemStyle}>
        <img
          src={this.props.url}
          alt={this.props.url}
          className={ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
