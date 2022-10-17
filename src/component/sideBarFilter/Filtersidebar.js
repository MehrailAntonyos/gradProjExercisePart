
import './Filtersidebar.css';

function Filtersidebar() {
    return (
        <div id="filterApi">
            <h4>Filter Exercises By:</h4>
            <br></br>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Body Part:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="absBodyPart" id="absBodyPart"></input>
                                <label>Abs</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="fullBodyPart" id="fullBodyPart"></input>
                                <label>Full Body</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="chest" id="chest"></input>
                                <label>Chest</label>
                            </div>
                            
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="legsPart" id="legsPart"></input>
                                <label>Legs - Calves</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Equipments:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="noEquip" id="noEquip"></input>
                                <label>No Equipment</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="medicineBallEquip" id="medicineBallEquip"></input>
                                <label>Medicine Ball</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="dumbbellsEquip" id="dumbbellsEquip"></input>
                                <label>Dumbbells</label>
                            </div>
                            
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="barbellEquip" id="barbellEquip"></input>
                                <label>Barbell</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="trxEquip" id="trxEquip"></input>
                                <label>TRX</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="resisBandsEquip" id="resisBandsEquip"></input>
                                <label>Resistence Bands</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="stabilityBallEquip" id="stabilityBallEquip"></input>
                                <label>Stability Ball</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="benchEquip" id="benchlEquip"></input>
                                <label>Bench</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                            Hardness Level:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="enteryLevel" id="enteryLevel"></input>
                                <label>Entery Level</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="intermediateLevel" id="intermediateLevel"></input>
                                <label>Intermediate Level</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="highLevel" id="highLevel"></input>
                                <label>High Level</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filtersidebar;