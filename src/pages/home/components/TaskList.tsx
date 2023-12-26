import Task from "../../../utils/Types";

type TaskListProps = {
  items: Task[];
};

const TaskList = ({ items }: TaskListProps) => {
  return (
    <>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="h-5 w-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <span>{item.title}</span>
            </div>
            <p>{item.description}</p>
            <button
              type="button"
              className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
