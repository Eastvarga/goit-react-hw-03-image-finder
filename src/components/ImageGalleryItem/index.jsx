import { Component } from "react";
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from "./styles.module.css";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li id={this.props.id} className={ImageGalleryItemStyle}>
        <img
          src={this.props.url}
          alt={this.props.url}
          className={ImageGalleryItemImage}
          // data-set={this.props.modalUrl}
          onClick={() => this.props.onClick(this.props.modalUrl)}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  modalUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
