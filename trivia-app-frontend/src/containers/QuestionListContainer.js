import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/fetchQuestions';
import QuestionList from '../components/QuestionList'
import User from '../components/User'

class QuestionListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchQuestions()
    }

    handleLoading = () => {
        console.log(this.props.loading)
        if (this.props.loading) {
            return <div>Loading...</div>
        } else if (!this.props.currentUser.username) {
            // debugger
            return <h1>Please sign in</h1>
        } else if (this.props.counter >= 10) {
            return (
                <div>
                    <h1 className='final-score'>FINAL SCORE</h1>
                    <User />
                </div>
            )
        } else {
            // {console.log(this.props.questions)}
            return <QuestionList questions={this.props.questions}/>
        }
    }

    render() {
        return (
            <div className='container-row'>
                {this.handleLoading()}
            </div>
        );
    }
 
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionsReducer,
        loading: state.questionsReducer.loading,
        currentUser: state.UsersReducer.currentUser,
        counter: state.UsersReducer.counter,
    }
}



// export default QuestionListContainer
export default connect(mapStateToProps, { fetchQuestions })(QuestionListContainer)

