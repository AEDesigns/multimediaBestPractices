const Socials = (props) => {
    return ( 
        <div>
            <p>
                {props.social ? 'Best Practices for Social Media Accessibility:' : null}
            </p>
            <p>
                {props.social ? `Ensure the video has captions, don't put too many words on the screen at one time. For more information visit: ` : null}
                {props.social ? <a href="https://accessibility.princeton.edu/guidelines/social-media" target="_blank" rel="noreferrer">Princeton Accessibility</a> : null}
            </p>
        </div>
     );
}
 
export default Socials;