import React, { Component } from 'react'

// class Question extends Component {

//     constructor(props) {
//         super(props)
//         console.log(this.props)
//         // const {correct_answer, incorrect_answer_a, incorrect_answer_b, incorrect_answer_c} = props.questionObj;
//         // console.log(correct_answer)
        
//         // this.state = {
//         //      //answer array should have a random index for correct_answer each time
//         //      answerArray: [correct_answer, incorrect_answer_a, incorrect_answer_b, incorrect_answer_c]
//         //  }
//     }


    // getRandomQuestionArray = () => {
    //     this.setState ({
    //         answerArray: [incorrect_answer_a, incorrect_answer_b, correct_answer, incorrect_answer_c]
    //     })
    //     // const answerChoices = [ this.props.incorrect_answer_a, this.props.incorrect_answer_b, this.props.incorrect_answer_c];
    //     // console.log(answerChoices)
    //     // let randomIndex = Math.floor(Math.random() * 3) + 1;
    //     // const randomArr = answerChoices.splice(randomIndex -1, 0, this.props.correct_answer);
    //     // console.log(answerChoices, randomArr)
    // }


    // componentDidMount() {
    //     console.log(this.props)
    //     this.getRandomQuestionArray(this.props)
    // }

//     render() {
//         {console.log(this.props.questionObj)}
//         return (
//             <>
//                 <h4>Question {this.props.questionObj.id}</h4>
//                 <p>{this.props.questionObj.question}</p>
//                 <p><button>A</button>{this.props.questionObj.correct_answer}</p>
//                 <p><button>B</button>{this.props.questionObj.incorrect_answer_a}</p>
//                 <p><button>C</button>{this.props.questionObj.incorrect_answer_b}</p>
//                 <p><button>D</button>{this.props.questionObj.incorrect_answer_c}</p>

//             </>
//         )
//     }
// }

const Question = ({ questionObj }) => (
    
    <div className='question'>
        <h3>Question: {questionObj.question}</h3>
        <p><button onClick={() => console.log('correct was clicked')}>{questionObj.correct_answer}</button></p>
        <p><button onClick={() => console.log('incorrectA was clicked')}>{questionObj.incorrect_answer_a}</button></p>
        <p><button onClick={() => console.log('incorrectB was clicked')}>{questionObj.incorrect_answer_b}</button></p>
        <p><button onClick={() => console.log('incorrectC was clicked')}>{questionObj.incorrect_answer_c}</button></p>
    </div>
)


export default Question;