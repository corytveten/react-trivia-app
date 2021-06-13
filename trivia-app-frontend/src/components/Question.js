import React, { Component } from 'react'

class Question extends Component {

    render() {
        {console.log(this.props.questionObj)}
        return (
            <>
                <p>Question {this.props.questionObj.id}</p>
                <p>{this.props.questionObj.question}</p>
                <p>a.{this.props.questionObj.correct_answer}</p>
                <p>b.{this.props.questionObj.incorrect_answers[0]}</p>
                <p>c.{this.props.questionObj.incorrect_answers[1]}</p>
                <p>d.{this.props.questionObj.incorrect_answers[2]}</p>

            </>
        )
    }
}

export default Question;