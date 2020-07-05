import React from 'react';
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((QuizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[QuizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[QuizItem.id]]
                    ]

                    return(
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {QuizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
               <button onClick={ props.onRetry }>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz