import React from 'react';
import ChapterCircle from './ChapterCircle.js'
import '../ComponentStyle/Content.css'


function Content({text}) {

    const chapters = ['Kap1', 'Kap2', 'Kap3', 'Kap4', 'Kap5', 'Kap1', 'Kap2', 'Kap3', 'Kap4', 'Kap5', 'Kap1', 'Kap2', 'Kap3', 'Kap4', 'Kap5', 'Kap1', 'Kap2', 'Kap3', 'Kap4', 'Kap5', 'Kap1', 'Kap2', 'Kap3', 'Kap4', 'Kap5']

    return (

        <div className='Content-Parent-Container'>
            <div className='Content-Container'>
                {chapters.map((index)=>{
                    return <ChapterCircle index={index} key={index}/>
                })}
            </div>
        </div>
    );
  }
  
  export default Content;