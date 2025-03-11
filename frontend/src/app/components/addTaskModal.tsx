import { notStrictEqual } from 'assert';
import React, { useState } from 'react'

type Props = {
    // task_id: number,
    // title: string,
    // notes: string,
    isOpen: boolean,
    onClose: (state: boolean, task: object|null) => void
    // handleAction: () => void
}

const AddTaskModal = (props: Props) => {
    const {isOpen, onClose} = props;

    const [taskDetails, setTaskDetails] = useState(
        {
            title: "",
            notes: "",
        }
    )

    if (!isOpen) return null;

    const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Clicked on:", e.target.id); // Logs the clicked element ID
        if(e.target.id == 'modal-area' || e.target.id == 'modal-close') {
            // console.log("Close the modal in here")
            onClose(false, null);
        }

    }
 
  return (
    <div id='modal-area'  className='modal-overlay' onClick={handleOverlayClose} >
        <div className='modal' >
            <div className='modal-header'>
                <h2 style={{fontWeight:'bolder', fontSize: '1.5em' }}>Add Task Details</h2>
                <span id='modal-close' className='modal-close' onClick={handleOverlayClose}>&times;</span>
                
            </div>
            <div className='modal-body' >
                <span style={{fontWeight:'bolder', fontSize: '1.5em' }}>Title</span>
                <textarea
                    id='title'
                    value={taskDetails.title}
                    className='modal-textarea'
                    style={{fontSize: '1.5em' }}
                    readOnly
                />
                <span style={{ fontWeight:'bolder',fontSize: '1.5em' }}>Notes</span>
                <textarea
                    id='notes'
                    value={taskDetails.notes}
                    className='modal-textarea'
                    style={{fontSize: '1.5em' }}
                    readOnly
                />
            </div>
            <div className='modal-footer' >
                <input className='button' style={{fontSize: '1.5em', backgroundColor: '#049966' }} id='save' type='button' value='Submit Task' />
            </div>
        </div>
    </div>

  )
}

export default AddTaskModal