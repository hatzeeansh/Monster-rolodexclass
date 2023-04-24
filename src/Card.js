import { Component } from "react";

class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <img
          src={`https://robohash.org/${data.id}/?size=180x180`}
          alt={`monster-${data.name}`}
        />
        <h3>{data.name}</h3>
        <h4>{data.email}</h4>
      </>
    );
  }
}

export default Card;
