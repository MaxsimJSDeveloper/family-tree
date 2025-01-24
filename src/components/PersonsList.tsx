import PersonListItem from "./PersonsItem";

interface IFormInput {
  name: string;
  yearsOfLife: string;
  additionalInfo: string;
}

interface PersonsListProps {
  persons: IFormInput[];
}

const PersonsList = ({ persons }: PersonsListProps) => {
  return (
    <div className="flex flex-col items-center">
      {persons.map((person, index) => (
        <PersonListItem
          key={index}
          person={person}
          showLine={index < persons.length - 1}
        />
      ))}
    </div>
  );
};

export default PersonsList;
