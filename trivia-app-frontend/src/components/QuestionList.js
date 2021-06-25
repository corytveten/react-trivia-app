import React, { Component } from 'react'

import Question from './Question';
import User from './User';

class QuestionList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            complete: false,
            counter: 0,
            answers: [],
            
        }
        //maybe map over answers array rather than use state
        
    }

    // componentDidMount(){
    //     this.setState({
    //         answers: this.randomizeAnswers()
    //     })
    // }

    randomizeAnswers = () => {
        // console.log(this.props.questions)
        // this.props.questions.map
        // let currentQuestion = this.props.questions.questions[this.state.counter];
        let currentQuestion = this.props.questions.questions[0];
        debugger;
        console.log(currentQuestion.answers);
        // let obj = currentQuestion.answers.find(obj => obj.correct);
        // console.log(obj);
        // let shuffledArray = this.shuffle(currentQuestion.answers)
        let shuffledArray = this.shuffleCorrect(currentQuestion.answers)
        console.log(shuffledArray)
        return shuffledArray;
    }

    shuffleCorrect(array) {
        const correctAnswer = array[0];
        const newArray = array.shift();
        const randomIndex = Math.floor(Math.random() * 4);
        console.log({newArray: newArray, randomIndex: randomIndex})
        return newArray.splice(randomIndex, 0, correctAnswer);
    }

    // shuffle(a) {
    //     var j, x, i;
    //     for (i = a.length - 1; i > 0; i--) {
    //         j = Math.floor(Math.random() * (i + 1));
    //         x = a[i];
    //         a[i] = a[j];
    //         a[j] = x;
    //     }
    //     return a;
    // }

    onButtonClick = (event, question, isCorrect) => {
        // console.log('Correct was clicked')
        console.log({ event: event.target, question: question, isCorrect: isCorrect })
        

        this.setState({
            complete: true,
        })

        
        // if (question, )

        
        // if (question.correct_answer === event.target.innerText) {
        //     console.log("right")
        //     this.setState({
        //         btnClass: 'btn-green'
        //     })
        //  } else {
        //     console.log('wrong')
        //  }     
        
        // setTimeout( () => {
        //     console.log('next question')
        //     // this.setState(previousState => {
        //     //     return {
        //     //         counter: previousState.counter + 1
        //     //     }
        //     // })
        //     this.setState(function(previousState) {
        //         return {
        //             counter: previousState.counter + 1
        //         }
        //     })
        //     // let newCount = this.state.count + 1
        //     // this.setState({
        //     //     count: newCount
        //     // })
        // }, 1000)
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

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps)
    // }

    render(){
        console.log(this.props)
        {console.log(this.state.answers)}
        return(
            <>
                <div className="question-list">
                    <p>question list</p>
                    <ul>
                        {/* {this.props.questionObjs.map(questionObj => (
                            <li key={questionObj.id}>
                                <Question questionObj={questionObj}/>
                            </li>
                        )
                            
                        )} */}
                                {/* {this.props.questions.questions ?  */}
                                
                                {this.state.answers !== [] ?
                            <li><Question 
                                    question={this.props.questions.questions[this.state.counter]} 
                                    // answers={() => this.randomizeAnswers}
                                    answers={this.state.answers}
                                    onButtonClick={this.onButtonClick} 
                                    btnClass={this.props.btnClass}
                                    />
                            </li> :
                                null    
                            }
                    </ul>
                    {this.state.complete? <button className='next-button' onClick={this.nextButtonClick}>Next Question</button> : null}
                </div>
                <User />
            </>
        )
    }

}

export default QuestionList;