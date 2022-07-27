/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Card from "./components/layouts/Cards";
import './App.css'

export default () =>{
    return (
        <div className='App'>
            <div className="">

            </div>
            <div className="Cards">
                <Card title='To Do'>
                </Card>
                <Card title='Do it'>
                </Card>
                <Card title='Done'> 
                </Card>
            </div>
        </div>
    );
}