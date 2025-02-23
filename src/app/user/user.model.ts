import { Task } from './../tasks/task/task.model';

type User = {
  id: string;
  name: string;
  avatar: string;
  tasks: Task[];
};

export type { User };