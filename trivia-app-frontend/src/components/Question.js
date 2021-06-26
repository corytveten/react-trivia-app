import React, { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import { increaseScore } from '../actions/users'

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
        counter: 0,
        complete: false,
        btnClass: 'btn',
        // score: 0
    }

    onButtonClick = (event) => {
        // debugger
        console.log(event.target.innerText)

        console.log(this.props.questions[this.state.counter])
        let answer = event.target.innerText;
        let correct = this.props.questions[this.state.counter].correct_answer;

        // if (answer === correct) {
        //  console.log('correct')
        //  this.setState(function(previousState) {
        //      return {
        //          score: previousState.score + 1
        //      }
        //  })
        // } else {
        //     console.log('wrong');
        // }
        // console.log(this.state.score)
        if (answer === correct) {
            console.log('correct')
            this.props.increaseScore();
           } else {
               console.log('wrong');
           }
           
        

    

        // console.log(this.props.questions[this.state.counter].answers);
        // const answersArr = this.props.questions[this.state.counter].answers;
        // const correctAns = answersArr.find(answer => answer.isCorrect)
        // console.log(this.correctAns)

        
        this.setState({
            complete: true
        })
        //change classList of correct button on click
    }


    nextButtonClick = () => {
        
        this.setState(function(previousState) {
            return {
                counter: previousState.counter + 1
            }
        })
    
        this.setState({
            complete: false
        })
        
    }

    questionBuilder = () => {
        const currentQuestion = this.props.questions.find(question => question === this.props.questions[this.state.counter]);
        // debugger
        return (
            <h3>{currentQuestion.question}</h3>
        );
    

    }


    answerShuffle() {
        console.log(this.props.questions)
        const currentQuestionAnswers = this.props.questions[this.state.counter].answers;
        // debugger
        //this.shuffle(currentQuestionsAnswers)map. 
        // this.shuffle(currentQuestionAnswers) {} - destructive without slice

        //.slice creates a copy which can be destructively changed by shuffle
        return (
            this.shuffle(currentQuestionAnswers.slice()).map((answer, index) => {
            return (
                <Answer className={this.state.btnClass} key={index} answer={answer} onButtonClick={this.onButtonClick} />
            )
        })

        // return (
        //     this.shuffle(currentQuestionAnswers).map((answer, index) => {
        //     return (
        //         <Answer key={index} answer={answer} onButtonClick={this.onButtonClick} />
        //     )
        // })
        )
        // console.log(this.shuffle(currentQuestionAnswers))

        // console.log(currentQuestionAnswers.answers)

        // const newArray = currentQuestionAnswers.answers.shift();
        // const randomIndex = Math.floor(Math.random() * 4);
        // console.log({newArray: newArray, randomIndex: randomIndex})
        // return newArray.splice(randomIndex, 0, correctAnswer);
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    render () {
        // console.log(this.questionBuilder())
        // console.log(this.props)
        if (this.props.questions.length > 0) {
         console.log(this.answerShuffle()) 
        };

        let correctAns;
        if (this.state.complete && this.state.counter < 10) {
            let answersArr = this.props.questions[this.state.counter].answers;
            let AnswerObj = answersArr.find(answer => answer.isCorrect)
            correctAns = <h2>Correct Answer: {AnswerObj.answer}</h2>
            console.log(correctAns)
        }

        //  if/else for render after the question is clicked
        let nextButton;
        if (this.state.complete && this.state.counter < 10) {
            // let answersArr = this.props.questions[this.state.counter].answers;
            // results = <p>Correct Answer: {answersArr.find(answer => answer.isCorrect)}</p>
            nextButton = <button className='next-button' onClick={this.nextButtonClick}>Next Question</button>
        }
         
        return (
            <>
            <div className='question'>
                {/* {!this.props.questions.length > 0 ? null : <h3>Question: {this.props.questions[this.state.counter].question}</h3>} */}
                {this.props.questions.length > 0 ? this.questionBuilder() : null }
                <ul>
                    {this.props.questions.length > 0 ? this.answerShuffle() : null }
                </ul>
                {/* <Answer />
                <Answer />
                <Answer />
                <Answer /> */}
            </div>
            {/* {this.state.complete && this.state.counter < 10 ? <button className='next-button' onClick={this.nextButtonClick}>Next Question</button> : null} */}
            {correctAns}
            {nextButton}
            </>
        )

    }
}

const mapStateToProps = state => {
    return {
        questions: state.questionsReducer.questions,
    }
}  

export default connect(mapStateToProps, { increaseScore })(Question)