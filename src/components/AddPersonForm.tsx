import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../shared/Modal";
import { IFormInput } from "../App";

interface AddPersonFormProps {
  isOpen: boolean;
  onToggle: () => void;
  persons: IFormInput[];
  onAddPerson: (updatedPersons: IFormInput[]) => void;
}

const AddPersonForm = ({
  isOpen,
  onToggle,
  persons,
  onAddPerson,
}: AddPersonFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const updatedPeople = [...persons, data];
    onAddPerson(updatedPeople);
    localStorage.setItem("people", JSON.stringify(updatedPeople)); // Сохраняем данные в localStorage
    onToggle();
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onToggle}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label>Name:</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: { value: 20, message: "Max length is 20" },
                })}
                type="text"
                className="border p-2 rounded-md w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label>Years of Life:</label>
              <input
                type="text"
                {...register("yearsOfLife", {
                  maxLength: { value: 12, message: "Max length is 12" },
                })}
                className="border p-2 rounded-md w-full"
              />
              {errors.yearsOfLife && (
                <p className="text-red-500 text-sm">
                  {errors.yearsOfLife.message}
                </p>
              )}
            </div>

            <div>
              <label>Additional Info:</label>
              <input
                type="text"
                {...register("additionalInfo", {
                  maxLength: { value: 12, message: "Max length is 12" },
                })}
                className="border p-2 rounded-md w-full"
              />
              {errors.additionalInfo && (
                <p className="text-red-500 text-sm">
                  {errors.additionalInfo.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Submit"
              className="border p-2 rounded-md bg-blue-500 text-white w-full"
            />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddPersonForm;
