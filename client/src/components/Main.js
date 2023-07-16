import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'
import Video from './Video'
import sample from './vd1.mp4'
export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
             {/* <video className="video" autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video> */}
        <h1 className='title text-light'>Quiz JS</h1>
       
        {/* <p className='title text-light'>Discover your creative personality</p> */}
        <ol>
            <li>You will be asked 5 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
           
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
             {/* <p class>made with 🤍 by Shivangi</p> */}
        </div>
        <div className='start'>
           {/* <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link> */}
            <p className="me">made with 🤍 by Shivangi</p>
       </div>
    </div>
  )
}
