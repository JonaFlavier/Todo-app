'use client'
import { useEffect, useState } from 'react'

type Props = {
    progress: number
}

const Progress_bar = (props: Props) => {
    const [progressValue, setProgressValue] = useState<number>(0);

    useEffect(() => {
      setProgressValue(props.progress);
    }, [props.progress])
    
  return (
    <div className='progress-bar-background' >
        <div className='progress-bar' style={{width: `${progressValue}%`}} > 
        {progressValue}%
        </div>
    </div>
  )
}

export default Progress_bar