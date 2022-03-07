import React from 'react';
import '../ComponentStyle/Content.css'
import ChapterTextArea from './Chapter/ChapterTextArea'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { ChapterProvider, useChapter } from '../contexts/ChapterContext';


class Content extends React.Component {
    render() {
        const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test'];


        function onLinkClick(e) {

            this.forceUpdate();
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
                                        <li><Link to="/chapter" onClick={onLinkClick}>{chapter}</Link></li>)
                                })}
                            </ul>
                        </div>
                    </div>

                    <ChapterTextArea />
                </div>
                <Footer />
            </>
        )
    }
}
  
  export default Content;