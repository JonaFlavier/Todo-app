'use client'
import React, { useState } from 'react'
import TaskModal from './taskModal'

type Props = {
    task_id: number,
    title: string,
    notes: string,
    completed: boolean,
    update_task: (task_id: number, checked: boolean) => void
}

const Task_card = (props: Props) => {

  const {task_id, title, notes, completed, update_task} = props;
  const [completed_flag, setCompleted_flag] = useState(completed);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (value: boolean) => {
    console.log('updating task state')
    setCompleted_flag(!completed_flag);
    update_task(task_id, value);
  }

  const handleTaskModal = (state: boolean, id: string) => {
    // console.log(`task ${state} need to toggle modal here!!`)
    if (modalOpen != state && id != 'checkbox'){
      setModalOpen(state);
    }
    }

  return (
    <div className={` ${completed_flag? 'card-completed': 'card'} card-response card-base`} onClick={e => handleTaskModal(true, e.target.id)}  >
      <div className='card-content'>
      <h1 style={{fontWeight:'bolder', fontSize: '1.5em' }}>{title}</h1>
      <h3>{notes}</h3>
      </div>
        <input id='checkbox' type='checkbox' checked={completed_flag} onChange={e => handleChange(e.target.checked)} />
      <TaskModal task_id={task_id} title={title} notes={notes} isOpen={modalOpen} onClose={handleTaskModal} />
    </div>
  )
}

export default Task_card