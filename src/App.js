import { createContext, useState } from "react";
import Header from "./components/Header";

export const InputContext = createContext();


function App() {

  const [inputValue, setInputValue] = useState("example");

  const value = {
    inputValue, setInputValue,
  }
  return (
    <InputContext.Provider value={value}>
    <div className="App">
    <Header />
    </div>
    </InputContext.Provider>

    
  );

}

export default App;
