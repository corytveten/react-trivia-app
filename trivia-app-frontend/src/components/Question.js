import React, { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import { increaseScore } from '../actions/users'
import { increaseCounter } from '../actions/users'



class Question extends Component {

    state = {
        complete: false,
        btnClass: 'btn',
        clickedBtn: ''
    }

    onButtonClick = (event, clickedAnswer) => {
        // debugger
        console.log(event.target.innerText)

        console.log(this.props.questions[this.props.counter])
        let answer = event.target.innerText;
        let correct = this.props.questions[this.props.counter].correct_answer;


        if (answer === correct) {
            // console.log('correct')
            this.props.increaseScore();
           } else {
            //    console.log('wrong');
           }
           


        
        this.setState({
            complete: true,
            clickedBtn: clickedAnswer.answer,
        })
        //change classList of correct button on click
    }


    nextButtonClick = () => {
        
        this.setState(function(previousState) {
            return {
                counter: previousState.counter + 1
            }
        })
        console.log('clicked', this.state.complete)
        this.setState({
            complete: false,
            clickedBtn: ''
        })

        this.props.increaseCounter();


        
    }

    questionBuilder = () => {
        const currentQuestion = this.props.questions.find(question => question === this.props.questions[this.props.counter]);
        // debugger
        return (
            currentQuestion? <h2 className='question'>{currentQuestion.question}</h2> : null
        );
    

    }


    answerShuffle() {
        console.log(this.props.questions, 'counter:', this.props.counter)

        const currentQuestionAnswers = this.props.questions[this.props.counter].answers

        // this.shuffle(currentQuestionAnswers) {} - destructive without slice

        //.slice creates a copy which can be destructively changed by shuffle
        return (
            this.shuffle(currentQuestionAnswers.slice()).map((answer, index) => {
            let highlightStatus = 'btn'
            if (this.state.complete) {
                if (answer.answer === this.state.clickedBtn && !answer.isCorrect) {
                    console.log('hello')
                    highlightStatus = 'btn-red'
                }
                if (answer.isCorrect) {
                    highlightStatus = 'btn-green'
                }
            }

            console.log(this.state.clickedBtn)
            return (
                <Answer key={index} answer={answer} highlightStatus={highlightStatus} onButtonClick={this.onButtonClick} />
            )
        })

        )

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
        // if (this.props.questions.length > 0) {
        //  console.log(this.answerShuffle()) 
        // };

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

            nextButton = <button className='next-button' onClick={()=> this.nextButtonClick()}>Next Question</button>
        }


         
        return (
            <>
                <div className='question'>
                    {this.props.questions.length > 0 ? this.questionBuilder() : null }
                    <ul>
                        {/* make sure questions exists */}
                        {this.props.questions.length > 0 ? this.answerShuffle() : null }
                    </ul>
                </div>
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

