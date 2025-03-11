'use client'
import Image from "next/image";
import Task_card from "./components/taskCard";
import Progress_bar from "./components/progressBar";
import { useEffect, useState } from "react";
import AddTaskModal from "./components/addTaskModal";

// dummy data for tasks
const task_dict = {
  1: {
    title: 'set up frontend',
    notes: 'complete the main functionality',
    completed: false
  },
  2: {
    title: 'set up backend',
    notes: 'use fast api',
    completed: false
  },
  3: {
    title: 'set up data base',
    notes: 'use postgresql',
    completed: false
  },
  4: {
    title: 'add auth functionality using different applications',
    notes: 'added later',
    completed: false
  },
  5: {
    title: 'docker',
    notes: 'docker compose all components',
    completed: false
  },
}

export default function Home() {

  const [tasksDict, setTasksDict] = useState(task_dict);

  const [progress, setProgress] = useState(0);
  const [update, setUpdate] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(calcProgress());
    setProgress(calcProgress());
    
  }, [])

  useEffect(() => {
    console.log(calcProgress());
    setProgress(calcProgress());
    setUpdate(false);
  }, [update])



  const calcProgress = () => {
    const tasks_length = Object.keys(tasksDict).length;
    const completed_length = Object.entries(tasksDict).filter((object, idx) => {
      return object[1].completed == true    }).length
    console.log(completed_length/tasks_length * 100.0);
    return completed_length/tasks_length * 100.0;
  }

  
  const handleTaskState = (task_id: number, checked: boolean) => {
    // update which task has an update on their task state
    console.log(`${task_id} ${checked}`)
    setTasksDict(
      (previousTasks) => ({
        ...previousTasks,
        [task_id]: {
          ...previousTasks[task_id],
          completed: checked,
        }
      })
    );

    setUpdate(true);
  }

  const handleAddTaskModal = (state: boolean, task: object|null) => {
    // console.log(`task ${state} need to toggle modal here!!`)
    console.log(task)
    if (modalOpen != state){
      setModalOpen(state);
    }
    }



  return (
    <>
    <div className="progress-bar-container">
    <Progress_bar progress={progress}/>
    </div>
      
      <main>
        {
          Object.entries(task_dict).map((task, idx) => {
            const id = Number(task[0])
            const {completed, notes, title} = task[1]
             
            return <Task_card 
                      key={idx}
                      task_id={id}
                      title = {title}
                      notes = {notes}
                      completed = {completed}
                      update_task={handleTaskState}
                    />
          })
        }
       

    </main>
    <footer>
      <button className="task-button-default task-button" style={{backgroundColor: '#ff9932'}} onClick={e => setModalOpen(true)} >Add New Task</button>
    <AddTaskModal  isOpen={modalOpen} onClose={handleAddTaskModal} />
    </footer>
    </>


  );
}
