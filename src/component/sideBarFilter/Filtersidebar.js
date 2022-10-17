
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
                                <label for="">Abs</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="fullBodyPart" id="fullBodyPart"></input>
                                <label for="">Full Body</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="chest" id="chest"></input>
                                <label for="">Chest</label>
                            </div>
                            
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="legsPart" id="legsPart"></input>
                                <label for="">Legs - Calves</label>
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
                                <label for="">No Equipment</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="medicineBallEquip" id="medicineBallEquip"></input>
                                <label for="">Medicine Ball</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="dumbbellsEquip" id="dumbbellsEquip"></input>
                                <label for="">Dumbbells</label>
                            </div>
                            
                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="barbellEquip" id="barbellEquip"></input>
                                <label for="">Barbell</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="trxEquip" id="trxEquip"></input>
                                <label for="">TRX</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="resisBandsEquip" id="resisBandsEquip"></input>
                                <label for="">Resistence Bands</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="stabilityBallEquip" id="stabilityBallEquip"></input>
                                <label for="">Stability Ball</label>
                            </div>

                            <div className="sortExerciseChoices">
                                <input type="checkbox" name="benchEquip" id="benchlEquip"></input>
                                <label for="">Bench</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                            Hardness Level:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <div class="sortExerciseChoices">
                                <input type="checkbox" name="enteryLevel" id="enteryLevel"></input>
                                <label for="">Entery Level</label>
                            </div>

                            <div class="sortExerciseChoices">
                                <input type="checkbox" name="intermediateLevel" id="intermediateLevel"></input>
                                <label for="">Intermediate Level</label>
                            </div>

                            <div class="sortExerciseChoices">
                                <input type="checkbox" name="highLevel" id="highLevel"></input>
                                <label for="">High Level</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filtersidebar;