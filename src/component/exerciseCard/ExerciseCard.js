
import './ExerciseCard.css';
import React, { useState } from 'react';

function ExerciseCard(props) {

    const [arr, setArr] = useState([
        {
            "id": 1,
            "exerciseName": "Supine Pelvic Tilts",
            "bodyPart": "Abs",
            "equipments": "No Equipment",
            "imgStatic": "https://acewebcontent.azureedge.net/exercise-library/large/7-1.jpg",
            "imgExplainGif": "images/apiImages/id1Gif.gif",
            "paragraphExplainSteps": [
                "Step 1",
                "Starting Position: Lie supine (on your back) with your knees bent and both feet flat on the mat/floor and the knees aligned with the second toe of each foot. Abduct your arms (extend to side) with the palms supinated (facing up to the ceiling).g",
                "Step 2",
                "Downward Phase: Exhale and gently contract your abdominal muscles to flatten your low back into the mat/floor. Avoid trying to lift your hips (tailbone) off the mat/floor. Hold this position briefly.",
                "Step 3",
                "Upward Phase: Inhale and slowly relax your abdominal muscles while gently contracting your erector spinae (low back muscles) to increase the arch in your low back. Avoid raising your hips off the mat/floor. Hold this position briefly before returning to your starting position."
            ], "favourite": "unchecked"
        },
        {
            "id": 2,
            "exerciseName": "Bird-dog",
            "bodyPart": "Abs",
            "equipments": "No Equipment",
            "imgStatic": "https://acewebcontent.azureedge.net/exercise-library/large/14-1.jpg",
            "imgExplainGif": "images/apiImages/id2Gif.gif",
            "paragraphExplainSteps": [
                "Step 1",
                "Starting Position: Lie supine (on your back) with your knees bent and both feet flat on the mat/floor and the knees aligned with the second toe of each foot. Abduct your arms (extend to side) with the palms supinated (facing up to the ceiling).g",
                "Step 2",
                "Downward Phase: Exhale and gently contract your abdominal muscles to flatten your low back into the mat/floor. Avoid trying to lift your hips (tailbone) off the mat/floor. Hold this position briefly.",
                "Step 3",
                "Upward Phase: Inhale and slowly relax your abdominal muscles while gently contracting your erector spinae (low back muscles) to increase the arch in your low back. Avoid raising your hips off the mat/floor. Hold this position briefly before returning to your starting position."
            ], "favourite": "unchecked"
        },
        {
            "id": 3,
            "exerciseName": "Medicine Ball Push-ups",
            "bodyPart": "Abs",
            "equipments": "Medicine Ball",
            "imgStatic": "https://acewebcontent.azureedge.net/exercise-library/large/40-1.jpg",
            "imgExplainGif": "images/apiImages/id3Gif.gif",
            "paragraphExplainSteps": [
                "Step 1",
                "Starting Position: Lie supine (on your back) with your knees bent and both feet flat on the mat/floor and the knees aligned with the second toe of each foot. Abduct your arms (extend to side) with the palms supinated (facing up to the ceiling).g",
                "Step 2",
                "Downward Phase: Exhale and gently contract your abdominal muscles to flatten your low back into the mat/floor. Avoid trying to lift your hips (tailbone) off the mat/floor. Hold this position briefly.",
                "Step 3",
                "Upward Phase: Inhale and slowly relax your abdominal muscles while gently contracting your erector spinae (low back muscles) to increase the arch in your low back. Avoid raising your hips off the mat/floor. Hold this position briefly before returning to your starting position."
            ], "favourite": "unchecked"
        },

    ]);

    var exCardsLocal = [];
    function AddToFav(favExercisesById) {
        console.log(favExercisesById);
        var exerciseObjById = arr.findIndex((item)=>item.id==favExercisesById);

        console.log(favExercisesById);
        favExercisesById.favourite = "checked";

        if(!localStorage.getItem("exerciseId")){
            exCardsLocal.push(favExercisesById);
            localStorage.setItem("exerciseId", JSON.stringify(exCardsLocal));
        }
        else{
            exCardsLocal = JSON.parse(localStorage.getItem("exerciseId"));
            exCardsLocal.push(favExercisesById);
            localStorage.setItem("exerciseId", JSON.stringify(exCardsLocal));
        }
        // console.log(arr[exerciseObjById]);
        // // setArr([...arr]);
        // console.log(arr);
        // return (
        // arr.map((arr) =>
        // {if(arr.favourite == "checked"){

        //     <div className='cards' key={exerciseObjById}>
        //         {/* {console.log(++exerciseObjById)} */}
        //         {console.log(arr)}
        //         <div className='contentTitle'>{arr.exerciseName}</div>
        //         <div className='image-section'>
        //             <img className='imgstatic' src={arr.imgStatic} style={{ width: "100%", height: "100%" }}></img>
        //         </div>
        //         <div className='links'>
        //             <button className='buttonApi my-5'>See More</button>
        //             <div className='iconsDiv'>
        //                 {/* <i className="fa fa-heart" aria-hidden="true" onClick={()=>{addToFav(item.id)}}></i> */}
        //                 <i className="uil uil-paperclip" aria-hidden="true"></i>
        //             </div>
        //         </div>
        //     </div> }}
        // ))
    };

    return (
        arr.map((item) =>
            <div className='cards' key={item.id}>
                {console.log(item)}
                <div className='contentTitle'>{item.exerciseName}</div>
                <div className='image-section'>
                    <img className='imgstatic' src={item.imgStatic} style={{ width: "100%", height: "100%" }}></img>
                </div>
                <div className='links'>
                    <button className='buttonApi my-5'>See More</button>
                    <div className='iconsDiv'>
                        <i className="fa fa-heart" aria-hidden="true" onClick={()=>{AddToFav(item)}}></i>
                        <i className="uil uil-paperclip" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    );
}

export default ExerciseCard ;