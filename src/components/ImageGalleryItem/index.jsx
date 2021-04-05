import { Component } from "react";
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from "./styles.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li id={this.props.id} className={ImageGalleryItemStyle}>
        <img
          src={this.props.url}
          alt={this.props.url}
          className={ImageGalleryItemImage}
          data-set={this.props.modalUrl}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
