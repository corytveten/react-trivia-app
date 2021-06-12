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

    //componentDidMount method which will call fetch questions
}

export default QuestionListContainer