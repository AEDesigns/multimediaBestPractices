import React, { useState } from 'react';

const QuestionCard = (props) => {

    const [state, setState] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        setState(e.target.value);
    }

    return ( 
        <div>
            {props.questions.questions.map(newQues => {
                return <div className="card" key={newQues.id.toString()}>
                            <h3>{newQues.question}</h3>
                            <select onChange={(e) => handleChange(e)}>
                                {newQues.choices.map(choices => {
                                    return <option value={choices.value} key={choices.id.toString()}>{choices.displayValue}</option>
                                })}
                            </select>
                        </div>
            })}
            {state}
        </div>
     );
}
 
export default QuestionCard;