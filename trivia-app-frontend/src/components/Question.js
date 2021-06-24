import React, { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';

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

// const Question = ({ questionObj, onButtonClick, btnClass }) => {
//     const Question = ({ question, onButtonClick }) => {

//     if (!question) {
//         return null;
//     }
    
//     return (
//     <div className='question'>
//         <h3>Question: {question.question}</h3>
//         <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[0].isCorrect)}>{question.answers[0].answer}</button></p>
//         <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[1].isCorrect)}>{question.answers[1].answer}</button></p>
//         <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[2].isCorrect)}>{question.answers[2].answer}</button></p>
//         <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[3].isCorrect)}>{question.answers[3].answer}</button></p>
//     </div>
//     );
// }


// export default Question;

class Question extends Component {

    state = {
        counter: 0
    }

    questionBuilder = () => {
        const currentQuestion = this.props.questions.find(question => question === this.props.questions[this.state.counter]);
        debugger
        return (
            <div>
                <h3>{currentQuestion.question}</h3>
                {/* {answerShuffle(this.props)} */}
            </div>
        )

        function answerShuffle(props) {
            const correctAnswer = props.questions.answers[0];
            debugger
            console.log(currentQuestion.answers.shift())
            const newArray = currentQuestion.answers.shift();
            const randomIndex = Math.floor(Math.random() * 4);
            console.log({newArray: newArray, randomIndex: randomIndex})
            return newArray.splice(randomIndex, 0, correctAnswer);
        }
    }

    // questionOrganizer = () => {
    //     this.props.questions.map(question => {
    //         console.log(question.answers)
    //     })
    // }

    

    render () {
        console.log(this.questionBuilder())
        // console.log(this.props)
        return (
            <div className='question'>
                {!this.props.questions.length > 0 ? null : <h3>Question: {this.props.questions[this.state.counter].question}</h3>}
                {this.questionBuilder}
                {/* <Answer />
                <Answer />
                <Answer />
                <Answer /> */}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        questions: state.questionsReducer.questions,
    }
}  

export default connect(mapStateToProps)(Question)