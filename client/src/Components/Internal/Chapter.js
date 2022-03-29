import React from 'react';
import ChapterTextArea from './Chapter/ChapterTextArea'
import InternalHeader from './InternalHeader';
import InternalFooter from './InternalFooter';
import { Link } from 'react-router-dom';
import { ChapterProvider, useChapter } from '../../contexts/ChapterContext';


class Content extends React.Component {
    render() {
        require("../../ComponentStyle/Content.css");

        const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test'];


        function onLinkClick(e) {

            this.forceUpdate();
        }

        return (
            <>
                <InternalHeader />
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
                <InternalFooter />
            </>
        )
    }
}
  
  export default Content;