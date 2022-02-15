import React, { useState } from 'react';
import Youtube from './youtube';

const QuestionCard = (props) => {

    const [state, setState] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setState(true);
    }

    return ( 
        <div>
            {props.questions.questions.map(newQues => {
                return <div className="card" key={newQues.id.toString()}>
                            <h3>{newQues.question}</h3>
                            <select onChange={(e) => handleChange(e)}>
                                <option hidden disabled selected value>Select an option</option>
                                {newQues.choices.map(choices => {
                                    return <option value={choices.value} key={choices.id.toString()}>{choices.displayValue}</option>
                                })}
                            </select>
                        </div>
            })}
            <Youtube youtube={state} />
        </div>
     );
}
 
export default QuestionCard;