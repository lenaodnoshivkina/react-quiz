import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 0,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                id: 1,
                question: 'Когда уходит Снусмумрик?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Осенью', id: 1},
                    {text: 'Зимой', id: 2},
                    {text: 'Весной', id: 3},
                    {text: 'Летом', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz