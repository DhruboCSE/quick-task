import { Task } from './../tasks/task/task.model';

export type User = {
  id: string;
  name: string;
  avatar: string;
  tasks: Task[];
};