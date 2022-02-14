import QuestionCard from "./Components/questionCard";
import jsonData from './questions.json';

function App() {
  return (
    <div className="App">
      Accessibility Matrix
      <QuestionCard questions={jsonData} />
    </div>
  );
}

export default App;
