import { useState } from "react";
import InputField from "./components/InputField";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);
  function handleInput(e, field) {
    setInputs((prevInputs) => {
      const updatedInputs = { ...prevInputs, [field]: +e.target.value };
      handleTable(updatedInputs);
      return updatedInputs;
    });
  }

  function handleTable(inputs) {
    if (
      Object.keys(inputs).length === 4 &&
      Object.values(inputs).every((value) => +value > 0)
    ) {
      setData(() => {
        let updatedData = [calculateInvestmentResults({ ...inputs })];
        return updatedData;
      });
    }
  }

  return (
    <>
      <InputField onChange={handleInput} />
      <ResultTable data={data[0]} />
    </>
  );
}
export default App;
