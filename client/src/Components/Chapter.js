import React from 'react';
import '../ComponentStyle/Content.css'
import ChapterTextArea from './Chapter/ChapterTextArea'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Content extends React.Component {
    render() {
        const chapters = ['Del 1', 'Del 2', 'Del 3', 'Del 4', 'Del 5', 'Del 6', 'Test']

        return (
            <>
                <Header />
                <div className='Content-Container'>
                    <div className="Chapter-Container-Container">
                        <div className="Chapter-Container">
                            <ul>
                                {chapters.map((chapter)=>{
                                    return (
                                        <li><Link to={{
                                            pathname: "/chapter",
                                            search: "?chapter=1&part=" + chapter.split(" ")[1]
                                        }} onClick={this.forceUpdate}>{chapter}</Link></li>)
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