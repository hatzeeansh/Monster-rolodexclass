import { Component } from "react";
import Card from "./Card";
import "./Display.css";
class Display extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="card-container">
        {list.map((mons) => {
          return (
            <div className="card" key={mons.id}>
              <Card data={mons} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Display;
