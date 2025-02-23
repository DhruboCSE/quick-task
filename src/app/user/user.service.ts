import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Task } from './../tasks/task/task.model';

@Injectable({providedIn: 'root'})
export class UserService {
  private users: User[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
      tasks: [
        {
          id: 't1',
          title: 'Buy groceries',
          summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
          dueDate: new Date('2021-06-01'),
          completed: false,
        },
        {
          id: 't2',
          title: 'Plan weekend',
          summary: 'Go to the park, watch a movie, go to the beach',
          dueDate: new Date('2021-06-04'),
          completed: false,
        },
        {
          id: 't3',
          title: 'Solve math homework',
          summary: 'Algebra, Calculus, Geometry',
          dueDate: new Date('2021-06-06'),
          completed: false,
        },
      ],
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
      tasks: [],
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
      tasks: [
        {
          id: 't7',
          title: 'Clean the house',
          summary: 'Vacuum, mop, dust, clean the bathroom',
          dueDate: new Date('2021-06-02'),
          completed: false,
        },
        {
          id: 't8',
          title: 'Cook dinner',
          summary: 'Prepare a healthy dinner for the family',
          dueDate: new Date('2021-06-04'),
          completed: false,
        },
        {
          id: 't9',
          title: 'Pay bills',
          summary: 'Electricity, water, internet, phone',
          dueDate: new Date('2021-06-06'),
          completed: false,
        },
      ],
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
      tasks: [
        {
          id: 't10',
          title: 'Go for a run',
          summary: 'Run 5 miles in the park',
          dueDate: new Date('2021-06-01'),
          completed: false,
        },
        {
          id: 't11',
          title: 'Work on project',
          summary: 'Work on the new project proposal',
          dueDate: new Date('2021-06-03'),
          completed: false,
        },
        {
          id: 't12',
          title: 'Call mom',
          summary: 'Call mom to wish her happy birthday',
          dueDate: new Date('2021-06-05'),
          completed: false,
        },
      ],
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
      tasks: [
        {
          id: 't13',
          title: 'Yoga',
          summary: 'Do a 30-minute yoga session at home',
          dueDate: new Date('2021-06-02'),
          completed: false,
        },
        {
          id: 't14',
          title: 'Study',
          summary: 'Study for the upcoming exam',
          dueDate: new Date('2021-06-04'),
          completed: false,
        },
        {
          id: 't15',
          title: 'Watch movie',
          summary: 'Watch the latest movie on Netflix',
          dueDate: new Date('2021-06-06'),
          completed: false,
        },
      ],
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
      tasks: [
        {
          id: 't16',
          title: 'Go for a bike ride',
          summary: 'Ride the bike to the park',
          dueDate: new Date('2021-06-01'),
          completed: false,
        },
        {
          id: 't17',
          title: 'Work on presentation',
          summary: 'Prepare slides for the upcoming presentation',
          dueDate: new Date('2021-06-03'),
          completed: false,
        },
        {
          id: 't18',
          title: 'Meet friends',
          summary: 'Meet friends for dinner at the new restaurant',
          dueDate: new Date('2021-06-05'),
          completed: false,
        },
      ],
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
  addTask(userId: string, task: Task) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      user.tasks.push(task);
    }
  }
  removeTask(userId: string, taskId: string) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      user.tasks = user.tasks.filter((t) => t.id !== taskId);
    }
  }
}
