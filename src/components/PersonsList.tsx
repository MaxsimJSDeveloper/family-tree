import PersonListItem from "./PersonsItem";

interface IFormInput {
  name: string;
  yearsOfLife: string;
  additionalInfo: string;
}

interface PersonsListProps {
  persons: IFormInput[];
  setPerson: (updatedPersons: IFormInput[]) => void;
}

const PersonsList = ({ persons, setPerson }: PersonsListProps) => {
  const handleDelete = (personToDelete: IFormInput) => {
    const storedPersons = JSON.parse(localStorage.getItem("people") || "[]");

    const updatedPersons = storedPersons.filter(
      (person: IFormInput) => person.name !== personToDelete.name
    );

    localStorage.setItem("people", JSON.stringify(updatedPersons));

    setPerson(updatedPersons);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {persons.map((person, index) => (
        <PersonListItem
          key={index}
          person={person}
          showLine={index < persons.length - 1}
          onDelete={() => handleDelete(person)}
        />
      ))}
    </div>
  );
};

export default PersonsList;
