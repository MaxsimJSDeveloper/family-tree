import { FaTrashAlt } from "react-icons/fa";

interface PersonListItemProps {
  person: {
    name: string;
    yearsOfLife: string;
    additionalInfo: string;
  };
  showLine: boolean;
  onDelete: () => void; // Функция для удаления
}

const PersonListItem = ({
  person,
  showLine,
  onDelete,
}: PersonListItemProps) => {
  return (
    <div className="relative mb-6 w-72 p-4 bg-white rounded-lg shadow-md border border-gray-300">
      <div className="text-center">
        <p className="text-xl font-semibold">{person.name}</p>
        <p className="text-sm text-gray-600">{person.yearsOfLife}</p>
        <p className="text-sm text-gray-500">{person.additionalInfo}</p>
      </div>
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
      >
        <FaTrashAlt className="text-lg" />
      </button>
      {showLine && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-6 bg-black" />
      )}
    </div>
  );
};

export default PersonListItem;
