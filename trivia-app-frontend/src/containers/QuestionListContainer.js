import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/fetchQuestions';
import QuestionList from '../components/QuestionList'
import User from '../components/User'

class QuestionListContainer extends Component {

    // constructor() {
    //     super();


    //     // this.state = {
    //     //     questionObjs: [],
    //     //     btnClass: 'btn',
    //     //     counter: 0,
    //     //     answers: [],
    //     // }
    // }
    
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
                    <h3>FINAL SCORE</h3>
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
                <p>Question List container</p>
                {this.handleLoading()}

            </div>
        );
    }

    // render() {
    //     console.log(this.state.questionObjs)
    //     return (
    //         <div>
    //             <p>question list container</p>
    //             <QuestionList questionObjs={this.state.questionObjs} onButtonClick={this.onButtonClick} btnClass={this.state.btnClass} counter={this.state.counter}/>
    //         </div>
    //     )
    // }

    // btnClass = () => {
    //     let btn_class = this.state.green ? 'btn-green' : 'btn'
    //     return btn_class
    // }


     

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

    // fetchQuestions() {
    //     this.setState({
    //         questionObjs: [{
    //             category: "Business",
    //             correct_answer: "Ty",
    //             difficulty: "hard",
    //             id: 1, 
    //             incorrect_answer_a: "Billund",
    //             incorrect_answer_b: "Bandai",
    //             incorrect_answer_c: "Wizkids",
    //             question: "Which company is responsible for the animal toy fad introduced in 1993 as Beanie Babies?",
    //             style: "multiple"
    //         }, 
    //         {
    //             category: "Religion",
    //             correct_answer: "Matthew",
    //             difficulty: "hard",
    //             id: 2,
    //             incorrect_answer_a: "Peter",
    //             incorrect_answer_b: "Luke",
    //             incorrect_answer_c: "Judas",
    //             question: "Which of the Apostles of Jesus Christ had been employed as a tax collector in Galilee?",
    //             style: "multiple"
    //         }]
    //     })
    // }

    //might want to add this to questionList and use props for the 'answer' value
    // addAnswerId = () => {
        // this.setState({
        //     answers: [
        //         {answerId: 1, answer: },
        //         {answerId: 2, answer: },
        //         {answerId: 3, answer: },
        //         {answerId: 4, answer: },
        //     ]
        // })
    // }

    //componentDidMount method which will call fetch questions
 
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionsReducer,
        loading: state.questionsReducer.loading,
        currentUser: state.UsersReducer.currentUser,
        counter: state.UsersReducer.counter,
    }
}

// const mapStateToProps = (state) => {
//     if (!state.usersReducer.currentUser) {
//         return {
//             questions: state.questionsReducer,
//             loading: state.questionsReducer.loading,
//         }
//     } else {
//         return {
//             questions: state.questionsReducer,
//             loading: state.questionsReducer.loading,
//             questions: state.questionsReducer,
//         }
//     }
// }

// export default QuestionListContainer
export default connect(mapStateToProps, { fetchQuestions })(QuestionListContainer)