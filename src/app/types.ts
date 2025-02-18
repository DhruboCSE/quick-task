type Task = {
  id: string;
  title: string;
  summary: string;
  dueDate: Date;
  completed: boolean;
}

type User = {
  id: string;
  name: string;
  avatar: string;
  tasks: Task[];
};

export type { User, Task };
