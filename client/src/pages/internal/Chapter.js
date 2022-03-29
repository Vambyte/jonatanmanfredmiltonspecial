import React from 'react';
import ChapterTextArea from '../../components/internal/Chapter/ChapterTextArea'
import InternalHeader from '../../components/internal/InternalHeader';
import InternalFooter from '../../components/internal/InternalFooter';
import { Link } from 'react-router-dom';
import { ChapterProvider, useChapter } from '../../contexts/ChapterContext';
import "../../styles/Pages.scss";


export default function Chapter() {
    const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test'];
    return (
     <>
         <InternalHeader />
         <div className="Chapter">
             <div className='Content-Container'>
                 <div className="Chapter-Container-Container">
                     <div className="Chapter-Container">
                         <ul>
                             {chapters.map((chapter)=>{
                                 return (
                                     <li><Link to="/chapter" >{chapter}</Link></li>)
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