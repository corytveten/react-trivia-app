import React, { Component } from 'react'

import Question from '../components/Question'

class QuestionListContainer2 extends Component {

    constructor() {
        super();

        this.state = {
            questionObj: [],
            btnClass: 'btn',
            counter: 0
        }
    }

    componentDidMount() {
        this.fetchQuestions();
    }

    render() {
        console.log(this.state.questionObjs)
        return (
            <div>
                <p>question list container</p>
                <Question questionObj={this.state.questionObj} onButtonClick={this.onButtonClick} btnClass={this.state.btnClass}/>
            </div>
        )
    }

    onButtonClick = (questionObj, event) => {
        // console.log('Correct was clicked')
        console.log(event.target)
        if (questionObj.correct_answer === event.target.innerText) {
            console.log("right")
            this.setState({
                btnClass: 'btn-green'
            })
         } else {
            console.log('wrong')
            // this.setState({
            //     btnClass: 'btn-red'
            // })
         }     
        
        setTimeout(() => {
            console.log('next question')
            this.setState({
                questionObj:     
             })
        }, 2000)
        
    } 

    fetchQuestions = () => {
        const questionSet = [{
            category: "Business",
            correct_answer: "Ty",
            difficulty: "hard",
            id: 1, 
            incorrect_answer_a: "Billund",
            incorrect_answer_b: "Bandai",
            incorrect_answer_c: "Wizkids",
            question: "Which company is responsible for the animal toy fad introduced in 1993 as Beanie Babies?",
            style: "multiple"
        }, 
        {
            category: "Religion",
            correct_answer: "Matthew",
            difficulty: "hard",
            id: 2,
            incorrect_answer_a: "Peter",
            incorrect_answer_b: "Luke",
            incorrect_answer_c: "Judas",
            question: "Which of the Apostles of Jesus Christ had been employed as a tax collector in Galilee?",
            style: "multiple"
        }]
        console.log(questionSet[0])
        this.setState({
            questionObj: questionSet[0]
        })
    }
}

export default QuestionListContainer2