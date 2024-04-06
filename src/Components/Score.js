import React from 'react'

const Score = ({ currentScore, avarage }) => {

    const calculateAvarage = () => {
        const historyData = typeof avarage === 'string' && avarage ? JSON.parse(avarage) : avarage
        const sum = historyData.length > 0 && historyData.reduce((a, b) => a + b)
        return (sum / avarage.length || 0).toFixed(2)
    }

    return (
        <div className="score">
            <p>Score: {currentScore}</p>
            <p>Attempt: {avarage.length}</p>
            <p>Average Score: {calculateAvarage()}</p>
        </div>
    )
}

export default Score;