import { useEffect, useState } from "react";
import "./App.css";
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
      setPerson(JSON.parse(savedPersons)); // Преобразуем строку обратно в массив
    }
  }, []);

  return (
    <>
      <OpenBtn persons={persons} setPerson={setPerson} />
      <PersonsList persons={persons} />
    </>
  );
}

export default App;
