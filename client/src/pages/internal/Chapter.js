import React from 'react';
import ChapterTextArea from '../../components/internal/Chapter/ChapterTextArea'
import InternalHeader from '../../components/internal/InternalHeader';
import InternalFooter from '../../components/internal/InternalFooter';
import { Link, useNavigate } from 'react-router-dom';
import { ChapterProvider, useChapter } from '../../contexts/ChapterContext';
import "../../styles/Pages.scss";


export default function Chapter() {
    const parts = ['1', '2', '3', '4', '5', '6'];

    const { setPart } = useChapter();

    const navigate = useNavigate();


    return (
     <>
         <InternalHeader />
         <div className="Chapter">
             <div className='Content-Container'>
                 <div className="Chapter-Container-Container">
                     <div className="Chapter-Container">
                         <ul>
                             {parts.map((part)=>{
                                 return (
                                     <li key={part}>
                                         <button onClick={(e) => {
                                            e.preventDefault();
                                            setPart(part).then(() => { navigate("/i/chapter"); })
                                         }} > Del {part}</button>
                                     </li>)
                             })}
                         </ul>
                     </div>
                 </div>
 
                 <ChapterTextArea />
             </div>
         </div>
         
         <InternalFooter />
     </>
    )
}