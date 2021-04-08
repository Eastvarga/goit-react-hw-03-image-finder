import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Component } from "react";
import { loader } from "./styles.module.css";
class LoaderApp extends Component {
  render() {
    return (
      <div className={loader}>
        <Loader
          type="TailSpin"
          color="#3f51b5"
          height={40}
          width={40}
          visible={true}
        />
      </div>
    );
  }
}
export default LoaderApp;
