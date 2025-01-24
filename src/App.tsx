import { useEffect, useState } from "react";
import OpenBtn from "./components/OpenBtn";
import PersonsList from "./components/PersonsList";

export interface IFormInput {
  name: string;
  yearsOfLife: string;
  additionalInfo: string;
}

function App() {
  const [persons, setPerson] = useState<IFormInput[]>([]);

  useEffect(() => {
    const savedPersons = window.localStorage.getItem("people");
    if (savedPersons) {
      setPerson(JSON.parse(savedPersons));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center py-8 transition-all duration-500">
      <h1 className="text-4xl font-semibold text-indigo-800 mb-6 animate__animated animate__fadeIn">
        Person List
      </h1>
      <OpenBtn persons={persons} setPerson={setPerson} />
      <PersonsList persons={persons} setPerson={setPerson} />
    </div>
  );
}

export default App;
