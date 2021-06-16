import React, { Component } from 'react'

import QuestionList from '../components/QuestionList'

class QuestionListContainer extends Component {

    constructor() {
        super();

        this.state = {
            questionObjs: [],
            btnClass: 'btn' 
        }
    }
    
    componentDidMount() {
        this.fetchQuestions()
        
    }

    render() {
        console.log(this.state.questionObjs)
        return (
            <div>
                <p>question list container</p>
                <QuestionList questionObjs={this.state.questionObjs} onButtonClick={this.onButtonClick} btnClass={this.state.btnClass}/>
            </div>
        )
    }

    // btnClass = () => {
    //     let btn_class = this.state.green ? 'btn-green' : 'btn'
    //     return btn_class
    // }

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
        }, 2000)
        
    } 

    //fetch questions methods

    // fetchQuestions = () => {
    //     fetch('http://localhost:4000/questions')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({
    //             questionObjs: data
    //         })
    //     })
    // }

    fetchQuestions = () => {
        this.setState({
            questionObjs: [{
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
        })
    }

    //componentDidMount method which will call fetch questions
 
}

export default QuestionListContainer