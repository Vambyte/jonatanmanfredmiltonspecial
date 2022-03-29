import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { useChapter } from '../../contexts/ChapterContext';


export default function ChapterPreview() {
    const { setChapter } = useChapter();
    const { currentUser } = useAuth();

    async function chapterClickHandle(e) {
        await setChapter("1");
    }

    return (
        <div className="chapterpreview-container">

            <header>
                <h1 className="chapterpreview-h1">Kapitel 1</h1>
            </header>
            
            <section>
                <p className="chapterpreview-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec magna turpis. Nam quis purus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed bibendum tortor felis, ut fringilla nibh fermentum non. Aenean nec velit ac quam pharetra lacinia. Integer erat magna, pulvinar vel aliquam et, facilisis vitae turpis. Donec sapien arcu, rutrum nec ullamcorper quis, mollis sed tortor. Quisque massa lectus, pulvinar sed lectus in, rhoncus interdum ante. Mauris posuere lobortis tristique. Donec laoreet condimentum nisi et varius. Morbi posuere nunc eget scelerisque placerat. Sed iaculis metus in cursus consequat. Praesent porttitor, massa imperdiet consequat euismod, lorem enim egestas quam, blandit dignissim magna justo non sapien.</p>
            </section>
    
            <footer>
                <Link to="/i/chapter" onClick={chapterClickHandle} >Fortsätt till kapitel</Link>
            </footer>
        </div>
    
    )
}

// class ChapterPreview extends React.Component {
//     constructor(props) {
//         super(props);

//         this.hidePreview = this.hidePreview.bind(this);
//     }

//     hidePreview(){
//         this.setState({
//             showComponent: false
//         });
//     }

//     render() {
//         return (
//             <div className="chapterpreview-container">
//                 <header>
//                     <h1 className="chapterpreview-h1">Kapitel 1</h1>
//                     <button onClick={this.hidePreview()}>HIDE!!</button>
//                 </header>
//                 <section>
//                     <p className="chapterpreview-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec magna turpis. Nam quis purus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed bibendum tortor felis, ut fringilla nibh fermentum non. Aenean nec velit ac quam pharetra lacinia. Integer erat magna, pulvinar vel aliquam et, facilisis vitae turpis. Donec sapien arcu, rutrum nec ullamcorper quis, mollis sed tortor. Quisque massa lectus, pulvinar sed lectus in, rhoncus interdum ante. Mauris posuere lobortis tristique. Donec laoreet condimentum nisi et varius. Morbi posuere nunc eget scelerisque placerat. Sed iaculis metus in cursus consequat. Praesent porttitor, massa imperdiet consequat euismod, lorem enim egestas quam, blandit dignissim magna justo non sapien.</p>
//                 </section>
            
//                 <footer>
//                     <a href="../">Fortsätt till kapitel 1</a>
//                 </footer>
//             </div>
//         );
//     }
// }

// export default ChapterPreview;
