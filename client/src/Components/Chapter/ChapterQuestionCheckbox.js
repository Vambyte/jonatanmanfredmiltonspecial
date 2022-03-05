import React from 'react'

import '../../ComponentStyle/ChapterTextArea.css'

export default function ({question, options}) {
    return (
        <>
        <div className="select-container">
            {options.map((option) => {
                return (
                    <>
                        <div class="select-option-container">
                            <label class="input-label" for={option}>{option}</label>
                            <input type="checkbox" name={option} className="checkbox select-child" key={option}/>
                        </div>
                    </>
                )
            })}
            
            <button type="submit"/>
        </div>

        </>
    )
}
