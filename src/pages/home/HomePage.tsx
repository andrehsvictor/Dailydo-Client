import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import LocalStorageKeys from "../../utils/LocalStorageKeys";
import Task from "../../utils/Types";

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function getTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function getDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  async function handleClick() {
    const request = await fetch(
      `${import.meta.env.VITE_API_URL}/task/create`,
      {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LocalStorageKeys.ACCESS_TOKEN
          )}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await request.json();

    if (request.status != 201) {
      let errorMessage = {
        message: "",
      };
      errorMessage = response;
      alert("Error: " + errorMessage.message);
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          LocalStorageKeys.ACCESS_TOKEN
        )}`,
      },
    })
      .then((response) => response.json())
      .then((response) => setTasks(response));
  }, [tasks]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tarefas</h1>
        <TaskInput
          onTitleChange={getTitle}
          onDescriptionChange={getDescription}
          titleValue={title}
          descriptionValue={description}
          onButtonClick={handleClick}
        />
        <TaskList items={tasks} />
      </div>
    </>
  );
};

export default HomePage;
