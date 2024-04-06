import React, { Component } from "react";
import { QUESTIONS } from "./questions";
import QuestionList from "./Components/QuestionList";
import Score from "./Components/Score";

class App extends Component {
  state = {
    score: 0,
    submit: false,
    avarage: []
  };

  componentDidMount() {
    const localData = localStorage.getItem("avarage")
    const avarage = localData ? JSON.parse(localData) : "";
    this.setState({ avarage })
  }


  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <h1 className="header">
            Questions
          </h1>
          <Score currentScore={this.state.score} avarage={this.state.avarage} />
          <div className="question-list">
            <QuestionList list={QUESTIONS} calculateScore={(value, submit) => this.setState({ score: value, submit })} />
          </div>
          <div className="submit-container">
            {
              this.state.submit &&
              <button id="submit" onClick={() => {
                const avarageUpdate = [...this.state.avarage, this.state.score]
                this.setState({ avarage: avarageUpdate })
                localStorage.setItem("avarage", JSON.stringify(avarageUpdate))
              }}>Submit</button>
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
