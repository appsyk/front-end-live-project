import React, { useEffect, useState } from "react";
import Questions from "./Questions";

const QuestionList = ({ list, calculateScore }) => {
    const [questions, setQuestions] = useState([])

    const calculate = (noOfYes, totalQuestion) => {
        return (100 * noOfYes) / totalQuestion
    }

    useEffect(() => {
        const noOfYes = questions.filter(item => Boolean(item.answer)).length;
        const totalQuestion = questions.length;

        const score = calculate(noOfYes, totalQuestion)
        const isSubmit = questions.filter(item => item.answer !== undefined).length === questions.length;

        calculateScore(score, isSubmit);
    }, [questions])

    useEffect(() => {
        const data = list && Object.entries(list)
        const questionData = data.map(([key, value]) => ({
            id: key,
            title: value,
        }))
        setQuestions(questionData)
    }, [list])

    const handleAnswer = (id, answer) => {
        const updateAnswer = questions.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    answer
                }
            }
            return item
        });
        setQuestions(updateAnswer)
    }

    return (
        <div>
            {
                questions.map((item, index) => {
                    return (
                        <div className="question-item" key={item.id}>
                            <Questions title={item.title} handleAnswer={(answer) => handleAnswer(item.id, answer)} answer={item.answer} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionList;
