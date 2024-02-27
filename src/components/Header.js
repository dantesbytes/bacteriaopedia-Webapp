import { useContext, useState } from "react";
import { InputContext } from "../App";


const Header = () => {
  const [value, setValue] = useState("");
  const {inputValue, setInputValue} = useContext(InputContext);
  console.log(inputValue)

  const handleInputChange = e => setValue(e.target.value);
  const handleSubmit = () => {
    setValue("")

  }

  const handleInputKeyDown = (e) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  return (
    <div className="bg-gray-700">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center text-white">Encyclopedia of Bacteria</h1>
                <p className="text-center mt-1 mb-10 test-slate-300 text-lg">A comprehensive database of 
                various bacteria species, including their names, 
                classifications, characteristics, and images</p>
                <div className="flex items-center justify-center mt-5">
                <div className="flex border-2 border-gray-200 rounded">
                <input className="px-4 py-2 md:w-80" type="text" placeholder="search..."
                onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} /> 
                <button className="bg-blue-400 border-l px-4 py-2 text-white" onClick={handleSubmit}>search</button>
            </div>

            <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold"> lora ipsum </span></h3>
        </div>
    </div>
    </div>
  )
}

export default Header