import React, { Component } from 'react'

import QuestionList from '../components/QuestionList'

class QuestionListContainer extends Component {

    constructor() {
        super();

        this.state = {
            questionObjs: []
        }
    }

    render() {
        console.log(this.state.questionObjs)
        return (
            <div>
                <p>question list container</p>
                <QuestionList questionObjs={this.state.questionObjs}/>
            </div>
        )
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
    componentDidMount() {
        this.fetchQuestions()
        
    }
}

export default QuestionListContainer