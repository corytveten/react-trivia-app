import React, { Component } from 'react'

import QuestionList from '../components/QuestionList'

class QuestionListContainer extends Component {

    render() {
        return (
            <div>
                <p>question list container</p>
                <QuestionList />
            </div>
        )
    }

    //fetch questions methods
    fetchQuestions = () => {
        fetch('http://localhost:4000/questions')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    //componentDidMount method which will call fetch questions
    componentDidMount() {
        this.fetchQuestions()
    }
}

export default QuestionListContainer