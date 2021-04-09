import { Component } from "react";
import { ImageGalleryStyle } from "./styles.module.css";
import PropTypes from "prop-types";
class ImageGallery extends Component {
  render() {
    return <ul className={ImageGalleryStyle}>{this.props.children}</ul>;
  }
}
ImageGallery.propTypes = {
  children: PropTypes.node,
};
export default ImageGallery;
