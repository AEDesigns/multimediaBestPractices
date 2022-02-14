const QuestionCard = (props) => {
    return ( 
        <div>
            {props.questions.questions.map(newQues => {
                return <div className="card">
                            <h3>{newQues.question}</h3>
                            <select>
                                {newQues.choices.map(choices => {
                                    return <option value={choices.value}>{choices.displayValue}</option>
                                })}
                            </select>
                        </div>
            })}
        </div>
     );
}
 
export default QuestionCard;