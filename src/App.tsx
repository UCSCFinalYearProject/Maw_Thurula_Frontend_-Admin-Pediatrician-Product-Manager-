import React from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./Store/reducers/rootReducers";
import {updateTempPost} from "./Store/actions/tempCount";
import SampleComponent  from "./Components/Sample";

const App: React.FC = ( ) => {
    const tempCount: {tempCount:number}  = useSelector((state: RootState) => state.tempPostReducer);
    const dispatch = useDispatch();

    const btnOnClick = ( ) => {
        let currentCount = tempCount.tempCount;
        currentCount++;
        dispatch(updateTempPost(currentCount));
    }
    return (

        <div className="App">
            <Button variant="contained" className={"my-4"}> මවු තුරුල </Button>
            <p> Temp Count <> {tempCount.tempCount} </> </p>
            <Button  onClick={btnOnClick}> Change value </Button>
            <SampleComponent></SampleComponent>
        </div>
    )
}

export default App;

