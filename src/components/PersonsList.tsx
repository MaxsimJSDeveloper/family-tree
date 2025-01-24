interface IFormInput {
  name: string;
  yearsOfLife: string;
  additionalInfo: string;
}

interface PersonsListProps {
  persons: IFormInput[]; // Указываем тип данных, которые передаем
}

const PersonsList = ({ persons }: PersonsListProps) => {
  return (
    <div>
      {persons.length === 0 ? (
        <p>No persons found.</p> // Если нет людей в списке
      ) : (
        <ul>
          {persons.map((person, index) => (
            <li key={index}>
              <strong>{person.name}</strong>
              <p>Years of Life: {person.yearsOfLife}</p>
              <p>Additional Info: {person.additionalInfo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PersonsList;
