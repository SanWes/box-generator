/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styler from './PageStyles.module.css';

//Start File with importing React and if you need to manipulate the data import {useState}

// Set a variable equal to a arrow function.

// This will encompass our entire code for this component


const BoxGenerator = () => {

    //Declared our state variables and their default values 
    const [boxColor, setBoxColor] = useState("aqua")
    const [boxSize, setBoxSize] = useState(100);

    const [boxList, setBoxList] = useState([]);

    //creating a function to create a new box
    const addBox = (e) => {
        //preventing our page from refreshing with preventDefault
        e.preventDefault();

        //New Object to hold the box info and place in the list of boxes
        const newBox = {boxColor:boxColor , boxSize:boxSize };
        setBoxList([...boxList, newBox]);


        //Clear entered values from the form after submit
        //did not work // only printed one or 2 then stopped due to reset of value. 
        // setBoxColor({boxColor:"aqua"});
        // setBoxSize({boxSize:100});
    }


    // The Code below shall be what displays on the webpage

    return (
        <div>

        <form onSubmit={ (e)=> addBox(e) } className="form-group" >
            <h3>Color</h3>
            <input onChange={(e)=> setBoxColor(e.target.value)} type="text"  name= "boxColor" id="boxColor"/>

            <h3>Size</h3>
            <input onChange={(e)=> setBoxSize(e.target.value)} type="text"  name= "boxSize" id="boxSize" /> <br/>
            <button type="submit">Stack</button>

        </form>

        {/* Display the boxes down below by mapping through the boxList  */}
            { boxList.map( (eachBox, idx) => {
                return <div key={idx} style= {{ display: 'inline-flex', backgroundColor: eachBox.boxColor, height: `${eachBox.boxSize}px` , width: Number(eachBox.boxSize), margin:5, borderRadius: 10 }} > </div>
            })
            }
        </div>
    )
}

export default BoxGenerator