type Task = {
  id: number;
  title: string | null;
  description: string | null;
  createdAt: Date | null;
  expiresAt: Date | null;
};

export default Task;