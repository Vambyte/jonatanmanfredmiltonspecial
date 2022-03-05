import React from 'react';
import '../ComponentStyle/Content.css'
import ChapterTextArea from './Chapter/ChapterTextArea'
import Header from './Header';
import Footer from './Footer';


function Content({text}) {

    const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test']

    function function1(){
        console.log("hello");
    }

    return (

        <>
            <Header />
            <div className='Content-Container'>
                <div className="Chapter-Container-Container">
                    <div className="Chapter-Container">
                        <ul>
                            {chapters.map((chapter)=>{
                                return (
                                    <li><a href="#" key={chapter} onClick={() => function1()}>{chapter}</a></li>)
                            })}
                        </ul>
                    </div>
                </div>

                <ChapterTextArea />
            </div>
            <Footer />
        </>
    );
  }
  
  export default Content;