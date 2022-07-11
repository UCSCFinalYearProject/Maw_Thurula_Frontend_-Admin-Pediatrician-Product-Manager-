import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../Store/reducers/rootReducers";

const SamplePage: React.FC = ( ) => {
    const tempCount: {tempCount:number}  = useSelector((state: RootState) => state.tempPostReducer);

    return (
        <React.Fragment>
            <h4> This is sample component with react redux state examples</h4>
            <h1> State value is <> {tempCount.tempCount} </> </h1>
        </React.Fragment>
    )
}

export default SamplePage;