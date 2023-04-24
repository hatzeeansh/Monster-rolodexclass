import { Component } from "react";
import Display from "./Display";
import Input from "./Input";
import "./styles.css";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      SearchField: "",
      monster: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState(
          () => {
            return { monster: data };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  render() {
    const onclickchangerhandler = (e) => {
      console.log(e.target.value);
      let v = e.target.value;
      this.setState(
        () => {
          return { SearchField: v };
        },
        () => {
          console.log(this.state);
        }
      );
    };

    let filteredlist = this.state.monster.filter((mons) => {
      if (
        mons.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
      ) {
        return mons;
      }
    });
    return (
      <div className="container">
        <h1>Monsters Rolodex</h1>
        {/* <input
          type="text"
          id="input-box"
          placeholder="Search Monster"
          onChange={onclickchangerhandler}
        /> */}
        <Input
          placeholder="Search Monster"
          chnagehandler={onclickchangerhandler}
          id="input-box"
        />
        {/* {filteredlist.map((mons) => {
          return <h1>{mons.name}</h1>;
        })} */}
        <Display list={filteredlist} />
      </div>
    );
  }
}

export default App;
