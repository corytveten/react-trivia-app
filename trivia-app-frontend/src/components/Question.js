import React, { Component } from 'react'

class Question extends Component {

    render() {
        {console.log(this.props.questionObj)}
        return (
            <>
                <h4>Question {this.props.questionObj.id}</h4>
                <p>{this.props.questionObj.question}</p>
                <p><button>A</button>{this.props.questionObj.correct_answer}</p>
                <p><button>B</button>{this.props.questionObj.incorrect_answer_a}</p>
                <p><button>C</button>{this.props.questionObj.incorrect_answer_b}</p>
                <p><button>D</button>{this.props.questionObj.incorrect_answer_c}</p>

            </>
        )
    }
}

export default Question;