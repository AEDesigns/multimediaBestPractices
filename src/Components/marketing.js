const Marketing = (props) => {
    return ( 
        <div>
            <p>
                {props.marketing ? 'Best Practices for Marketing and Advertising Accessibility:' : null}
            </p>
            <p>
                {props.marketing ? `Lorem Ipsum Dolar Set: ` : null}
                {props.marketing ? <a href="https://www.deque.com/blog/introduction-accessible-marketing/" target="_blank" rel="noreferrer">Accessible Marketing - Deque</a> : null}
            </p>
        </div>
     );
}
 
export default Marketing;
