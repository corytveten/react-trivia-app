import React, { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import { increaseScore } from '../actions/users'
import { increaseCounter } from '../actions/users'



class Question extends Component {

    state = {
        // counter: 0,
        complete: false,
        btnClass: 'btn',
        // score: 0
    }

    onButtonClick = (event) => {
        // debugger
        console.log(event.target.innerText)

        console.log(this.props.questions[this.props.counter])
        let answer = event.target.innerText;
        let correct = this.props.questions[this.props.counter].correct_answer;

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

        this.props.increaseCounter();


        
    }

    questionBuilder = () => {
        const currentQuestion = this.props.questions.find(question => question === this.props.questions[this.props.counter]);
        // debugger
        return (
            <h2 className='question'>{currentQuestion.question}</h2>
        );
    

    }


    answerShuffle() {
        console.log(this.props.questions)
        const currentQuestionAnswers = this.props.questions[this.props.counter].answers;
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
        if (this.state.complete && this.props.counter < 10) {
            let answersArr = this.props.questions[this.props.counter].answers;
            let AnswerObj = answersArr.find(answer => answer.isCorrect)
            correctAns = <h2 className='question'>Correct Answer: {AnswerObj.answer}</h2>
            console.log(correctAns)
        }

        //  if/else for render after the question is clicked
        let nextButton;
        if (this.state.complete && this.props.counter < 10) {
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
        counter: state.UsersReducer.counter
    }
}  

export default connect(mapStateToProps, { increaseScore, increaseCounter })(Question)

