import React from 'react'

export default function ({question, options}) {

    require("../../../ComponentStyle/ChapterTextArea.css");

    return (
        <>
        <div>
            <p className="question-text">{question}</p>
            <div className="question-container">

                <div className="select-container">
                    {options.map((option) => {
                        return (
                            <>
                                <label className="select-label" key={option+option}>
                                    <input type="checkbox" className="checkbox select-child" value={option} key={option}/> {option}
                                </label>
                            </>
                        )
                    })}
                </div>

                <button type="submit" className="question-btn">OK</button>

            </div>
        </div>
        </>
    )
}
