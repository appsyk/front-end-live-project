import React, { Component } from "react";
import { QUESTIONS } from "./questions";

class App extends Component {
  state = {
  };


  render() {
    console.log(76576, QUESTIONS);
    return (
      <div className="main__wrap">
        <main className="container">
          <h1 className="header">
            Questions
          </h1>
          <div className="question-list">
          </div>
        </main>
      </div>
    );
  }
}

export default App;
