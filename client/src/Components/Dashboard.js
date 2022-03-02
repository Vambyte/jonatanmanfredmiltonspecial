import React from 'react';
import '../ComponentStyle/Content.css'
import ChapterTextArea from './ChapterTextArea'
import Header from './Header';
import Footer from './Footer';


function Content({text}) {

    const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test']

    return (

        <>
            <Header />
            <div className='Content-Container'>
                <div className="Chapter-Container">
                    <ul>
                        {chapters.map((chapter)=>{
                            return (
                                <li><a>{chapter}</a></li>)
                        })}
                    </ul>
                </div>

                <ChapterTextArea />
            </div>
            <Footer />
        </>
    );
  }
  
  export default Content;