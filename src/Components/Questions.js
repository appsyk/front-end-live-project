import React from 'react'

const Questions = ({ title, handleAnswer, answer }) => {
    const check = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

    return (
        <>
            <h3>{title}</h3>
            <div className="button-container">
                <button id="yes" className={answer === true ? "active" : ""} onClick={() => handleAnswer(true)}>
                    {
                        answer === true && check
                    }
                    YES
                </button>
                <button id="no" className={answer === false ? "active" : ""} onClick={() => handleAnswer(false)}>
                {
                        answer === false && check
                    }
                    NO
                </button>
            </div>
        </>
    )
}

export default Questions;