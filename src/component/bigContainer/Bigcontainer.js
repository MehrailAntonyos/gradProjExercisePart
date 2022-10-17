
import './Bigcontainer.css';
import Filtersidebar from  '../sideBarFilter/Filtersidebar';
import ContainerExercises from '../mainContentExercise/ContainerExercises';

function Bigcontainer() {
    return (
        <div id='bigContainer'>
            <Filtersidebar></Filtersidebar>
            <ContainerExercises></ContainerExercises>
        </div>
    );
}

export default Bigcontainer;