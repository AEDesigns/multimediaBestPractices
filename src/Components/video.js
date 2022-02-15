const Video = (props) => {
    return ( 
        <div>
            <p>
                {props.video ? 'Best Practices for Video Accessibility:' : null}
            </p>
            <p>
                {props.video ? `Ensure the video has captions, don't put too many words on the screen at one time. For more information visit: ` : null}
                {props.video ? <a href="https://www.w3.org/WAI/media/av/captions/" target="_blank" rel="noreferrer">W3 Captioning</a> : null}
            </p>
        </div>
     );
}
 
export default Video;