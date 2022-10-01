import React from 'react'
import Questions from './Questions'
import './HomeMainbar.css'

const QuestionList = ({questionsList}) => {
    return (
        <>
            {
                questionsList.map((question) => (
                    <Questions question={question} key={question._id}/>
                ))
            }
        </>
    )
}

export default QuestionList