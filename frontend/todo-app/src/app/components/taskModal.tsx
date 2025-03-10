import { notStrictEqual } from 'assert';
import React from 'react'

type Props = {
    task_id: number,
    title: string,
    notes: string,
    isOpen: boolean,
    onClose: (state: boolean, id: string) => void
    // handleAction: () => void
}

const TaskModal = (props: Props) => {
    const {task_id, title, notes, isOpen, onClose} = props;

    if (!isOpen) return null;

    const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Clicked on:", e.target.id); // Logs the clicked element ID
        if(e.target.id == 'modal-area' || e.target.id == 'modal-close') {
            // console.log("Close the modal in here")
            onClose(false, e.target.id);
        }

    }
 

  return (
    <div id='modal-area'  className='modal-overlay' onClick={handleOverlayClose} >
        <div className='modal' >
            <div className='modal-header'>
                <h2 style={{fontWeight:'bolder', fontSize: '1.5em' }}>Task Details</h2>
                <span id='modal-close' className='modal-close' onClick={handleOverlayClose}>&times;</span>
                
            </div>
            <div className='modal-body' >
                <span style={{fontWeight:'bolder', fontSize: '1.5em' }}>Title</span>
                <textarea
                    id='title'
                    value={title}
                    readOnly
                    className='modal-textarea'
                    style={{fontSize: '1.5em' }}
                />
                <span style={{ fontWeight:'bolder',fontSize: '1.5em' }}>Notes</span>
                <textarea
                    id='notes'
                    value={notes}
                    readOnly
                    className='modal-textarea'
                    style={{fontSize: '1.5em' }}
                />
            </div>
            <div className='modal-footer' >
                <input className='button'  style={{fontSize: '1.5em', backgroundColor: '#cc0134' }} id='delete' type='button' value='Delete' />
                <input className='button' style={{fontSize: '1.5em', backgroundColor: '#049966' }} id='save' type='button' value='Save' />
            </div>
        </div>
    </div>

  )
}

export default TaskModal