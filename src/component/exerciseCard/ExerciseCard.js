
import './ExerciseCard.css';

function ExerciseCard() {
    return (
        <div className='cards'>
            <div className='contentTitle'>Bird-Dog</div>
            <div className='image-section'>
                <img className='imgstatic' src='https://acewebcontent.azureedge.net/exercise-library/large/14-1.jpg' style={{ width: "100%", height: "100%" }}></img>
            </div>
            <div className='links'>
                <button className='buttonApi my-5'>See More</button>
                <div className='iconsDiv'>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="uil uil-paperclip" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default ExerciseCard;