import React from 'react'

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
    const Question = ({ question, onButtonClick }) => {

    if (!question) {
        return null;
    }
    
    return (
    <div className='question'>
        <h3>Question: {question.question}</h3>
        <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[0].isCorrect)}>{question.answers[0].answer}</button></p>
        <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[1].isCorrect)}>{question.answers[1].answer}</button></p>
        <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[2].isCorrect)}>{question.answers[2].answer}</button></p>
        <p><button className='btn' onClick={(event) => onButtonClick(event, question, question.answers[3].isCorrect)}>{question.answers[3].answer}</button></p>
    </div>
    );
}


export default Question;