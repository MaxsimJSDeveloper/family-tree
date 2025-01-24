import { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import AddPersonForm from "./AddPersonForm";
import { IFormInput } from "../App";

interface OpenBtnProps {
  persons: IFormInput[];
  setPerson: React.Dispatch<React.SetStateAction<IFormInput[]>>;
}

const OpenBtn = ({ persons, setPerson }: OpenBtnProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>
        <RiAddLargeFill />
      </button>
      <AddPersonForm
        isOpen={isOpen}
        onToggle={toggleModal}
        persons={persons}
        onAddPerson={setPerson}
      />
    </>
  );
};

export default OpenBtn;
