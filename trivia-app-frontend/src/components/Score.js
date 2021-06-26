import React from 'react';
import { connect } from 'react-redux';

const Score = ({ currentUser }) => {

    return (
        <h3>Score: { currentUser.currentUser? currentUser.currentUser.score : null }</h3>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.UsersReducer
    }
}

export default connect (mapStateToProps)(Score)