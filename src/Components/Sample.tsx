import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../Store/reducers/rootReducers";

const SampleComponent: React.FC = ( ) => {
    const tempCount: {tempCount:number}  = useSelector((state: RootState) => state.tempPostReducer);

    return (
        <React.Fragment>
            <h4> This is sample compoment with react redux state examples</h4>
            <h1> Value is <> {tempCount.tempCount} </> </h1>
        </React.Fragment>
    )
}

export default SampleComponent;