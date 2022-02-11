const QuestionCard = (props) => {
    return ( 
        <div>
            {props.questions.questions.map(newQues => {
                return <div className="card" key={newQues.id}>
                        <h3>{newQues.question}</h3>
            </div>
            })}
        </div>
     );
}
 
export default QuestionCard;