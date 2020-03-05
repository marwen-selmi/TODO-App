import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: ""
    };
  }
  change = e => {
    this.setState({ term: e.target.value });
    // console.log("the valueof the target", e.target.value);
    // console.log("valueofitems", this.state);
  };
  submit = e => {
    e.preventDefault();
    // console.log("termvalue fromsubmit", this.state.term);
    if (this.state.term) {
      this.setState({
        items: [
          ...this.state.items,
          { text: this.state.term, iscomplete: false }
        ],
        term: ""
      });

      console.log(this.state);
    } else {
      alert("Please enter a text");
    }
  };
  complete = i => {
    console.log("this is", i);
    // console.log("this the valu", this.state.items[0].text);
    // this.setState({items.text:'why not'}) //why not
    this.setState({
      items: this.state.items.map((el, index) =>
        index === i ? { ...el, iscomplete: !el.iscomplete } : el
      )
    });
  };
  deleteitem = i => {
    this.setState({
      items: this.state.items.filter((el, index) => index !== i)
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>To-Do App!</h1>
          <h4>Add New To-Do</h4>
          <form onSubmit={this.submit}>
            <input value={this.state.term} onChange={this.change}></input>
            <button>Add</button>
          </form>
        </div>
        <h2> Let's get some work done!</h2>
        <div>
          <ul>
            {this.state.items.map((el, i) => (
              <li key={i}>
                <button onClick={() => this.complete(i)}>
                  {el.iscomplete ? "undo" : "complete"}
                </button>
                <button onClick={() => this.deleteitem(i)}>Delete</button>
                <span
                  style={{
                    color: "rgb(70, 150, 229)",
                    textDecoration: el.iscomplete ? "line-through" : "none"
                  }}
                >
                  {el.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
