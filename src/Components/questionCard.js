import React, { useState } from 'react';
import Video from './video';
import Socials from './socialMedia';
import Marketing from './marketing';
import Webinar from './webinar';

const QuestionCard = (props) => {

    const [displayResults, setDisplayResults] = useState(false)
    const [video, setVideo] = useState(false);
    const [socialMedia, setSocialMedia] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [webinar, setWebinar] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.value === "websiteVideos"){
            setVideo(true);
            setSocialMedia(false)
            setMarketing(false)
            setWebinar(false)
        } else if (e.target.value === "socialMedia") {
            setSocialMedia(true)
            setVideo(false)
            setMarketing(false)
            setWebinar(false)
        } else if(e.target.value === "marketing"){
            setVideo(false)
            setSocialMedia(false)
            setWebinar(false)
            setMarketing(true)
        } else if(e.target.value === "webinars"){
            setWebinar(true)
            setSocialMedia(false)
            setMarketing(false)
            setVideo(false)
            setDisplayResults(true)
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
            <p className={`${displayResults ? 'display' : 'hidden'}`}>
                {video ? <Video video={video} /> : null}
                {socialMedia ? <Socials social={socialMedia} /> : null}
                {marketing ? <Marketing marketing={marketing} /> : null}
                {webinar ? <Webinar webinar={webinar} /> : null}
            </p>
        </div>
     );
}
 
export default QuestionCard;