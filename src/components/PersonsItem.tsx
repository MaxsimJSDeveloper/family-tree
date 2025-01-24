import { FaTrashAlt } from "react-icons/fa";

interface PersonListItemProps {
  person: {
    name: string;
    yearsOfLife: string;
    additionalInfo: string;
  };
  showLine: boolean;
}

const PersonListItem = ({ person, showLine }: PersonListItemProps) => {
  return (
    <div className="relative mb-6">
      <div className="bg-gray-100 border border-gray-300 p-4 rounded-md w-60 text-center">
        <p>{person.name}</p>
        <p>{person.yearsOfLife}</p>
        <p>{person.additionalInfo}</p>
      </div>
      <button className="absolute top-2 right-2 text-red-500">
        <FaTrashAlt />
      </button>
      {showLine && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-6 bg-black" />
      )}
    </div>
  );
};

export default PersonListItem;
