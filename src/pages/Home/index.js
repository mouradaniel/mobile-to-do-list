import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import { 
  Container,
  TaskList
} from './styles';

export function Home() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      category: "Personal",
      description: "Organizing the next day's tasks",
      priority: "High"
    },
    {
      id: "2",
      category: "Work",
      description: "Re-read the book 'Clean Code'",
      priority: "Low"
    },
    {
      id: "3",
      category: "Other",
      description: "Going to the supermarket",
      priority: "Medium"
    }
  ]);

  return (
    <Container>      
      <Header />

      <TaskList>
        {tasks.map((task) => {
          return (
            <Task key={task.id} task={task} />
          )
        })}
      </TaskList>
    </Container>
  );
}
