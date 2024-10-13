import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 1000,
    annualInvestment: 50,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = inputValues.duration >= 1;

  function handleChange(identifier, newValue) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput input={inputValues} onChange={handleChange}>
        Initial Investment
      </UserInput>
      {!inputIsValid && <p className="center">Enter a duration greater than 0</p>}
      {inputIsValid && <Results input={inputValues} />}
    </>
  );
}

export default App;
