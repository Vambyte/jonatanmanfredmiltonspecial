import '../ComponentStyle/chapterCircle.css'

function ChapterCircle({index}) {
    console.log(index)
    return (
        <div className="ChapterCircle">
            <a href="#" >{index}</a>
        </div>
    );
  }
  
export default ChapterCircle;