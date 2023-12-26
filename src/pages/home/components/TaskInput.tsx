type TaskInputProps = {
  onTitleChange: React.ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange: React.ChangeEventHandler<HTMLInputElement>;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  titleValue: string;
  descriptionValue: string;
};

const TaskInput = ({
  onTitleChange,
  onDescriptionChange,
  onButtonClick,
  titleValue,
  descriptionValue,
}: TaskInputProps) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder="Adicione um título para tarefa"
        value={titleValue}
        onChange={onTitleChange}
      />
      <input
        type="text"
        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder="Adicione uma descrição para tarefa"
        value={descriptionValue}
        onChange={onDescriptionChange}
      />
      <button
        type="button"
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onButtonClick}
      >
        Adicionar
      </button>
    </div>
  );
};

export default TaskInput;
