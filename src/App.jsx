import { useState } from "react";
import InputField from "./components/InputField";
import ResultTable from "./components/ResultTable";

function App() {
  const [inputs, setInputs] = useState({});

  function handleInput(e, field) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [field]: [e.target.value] };
    });
  }

  return (
    <>
      <InputField onChange={handleInput} />
      <ResultTable />
    </>
  );
}

export default App;
