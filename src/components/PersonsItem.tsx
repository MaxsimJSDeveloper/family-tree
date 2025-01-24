import { MdDeleteOutline } from "react-icons/md";

interface PersonListItemProps {
  person: {
    name: string;
    yearsOfLife: string;
    additionalInfo: string;
  };
  showLine: boolean;
  onDelete: () => void;
}

const PersonListItem = ({
  person,
  showLine,
  onDelete,
}: PersonListItemProps) => {
  return (
    <div className="relative mb-6 w-72 p-4 bg-white rounded-lg shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:bg-blue-50">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800">{person.name}</p>
        <p className="text-sm text-gray-600">{person.yearsOfLife}</p>
        <p className="text-sm text-gray-500">{person.additionalInfo}</p>
      </div>
      <button
        onClick={onDelete}
        className="absolute top-7 right-4 text-red-500 hover:text-red-700 transition duration-300"
      >
        <MdDeleteOutline />
      </button>
      {showLine && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-6 bg-black" />
      )}
    </div>
  );
};

export default PersonListItem;
