// import { useContext, useState } from "react";
// import { InputContext } from "../App";


const Header = () => {
  return (
    <div className="bg-gray-700">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center text-white">Encyclopedia of Bacteria</h1>
                <p className="text-center mt-1 mb-10 test-slate-300 text-lg">Find definitions for bacteria</p>
                <div className="flex items-center justify-center mt-5">
                <div className="flex border-2 border-gray-200 rounded">
                <input className="px04 py-2 md:w-80" type="text" placeholder="search..."></input>
                <button className="bg-blue-400 border-l">search</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header