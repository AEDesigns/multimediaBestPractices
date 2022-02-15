import React, { useState } from 'react';
import Video from './video';

const QuestionCard = (props) => {

    const [video, setVideo] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.value === "websiteVideos"){
            setVideo(true);
        }
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
            {video ? <Video video={video} /> : null}
        </div>
     );
}
 
export default QuestionCard;