
const Webinar = (props) => {
    return ( 
        <div>
            <p>
                {props.webinar ? 'Best Practices for Webinar Accessibility:' : null}
            </p>
            <p>
                {props.webinar ? `Lorem Ipsum Dolar Set: ` : null}
                {props.webinar ? <a href="https://www.fda.gov/about-fda/internet-accessibility/accessible-web-conferences-and-webinar-best-practices" target="_blank" rel="noreferrer">Accessible Webinars</a> : null}
            </p>
        </div>
     );
}
 
export default Webinar;