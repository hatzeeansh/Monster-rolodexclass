import { Component } from "react";
import "./INput.css";
class Input extends Component {
  render() {
    const { id, placeholder, chnagehandler } = this.props;
    return (
      <div className="input-area">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={chnagehandler}
        />
      </div>
    );
  }
}

export default Input;
