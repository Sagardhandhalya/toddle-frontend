import React, { useState } from 'react'
import leftarrow from './../images/left-arrow.png'
import rightarrow from './../images/right-arrow.png'
import moveIcon from './../images/move.png'
import delIcon from './../images/delete.png'
import leftarrowLight from './../images/left-arrow-Light.png'
import rightarrowLight from './../images/right-arrow-Light.png'
import moveIconLight from './../images/move-Light.png'
import delIconLight from './../images/delete-Light.png'

export default function Standard({ id,text ,currentlevel,setCurrentLevel, updateStandard, oldstate }) {


    const [icons, setIcons] = useState([leftarrowLight, rightarrowLight, delIconLight, moveIconLight, true]);
    const [level , setLevel] = useState(currentlevel);
    const move = (e) => {

        console.log("moveing ..");
    }

    const indent = () => {
        if (level < 2) {

            setLevel(level + 1);
            setCurrentLevel(level+1);

           
        }
    }

    const outdent = (e) => {
        if (level > 0) {
            setLevel(level - 1);
            setCurrentLevel(level - 1);
       
          
        }
    }

    const deleteRow = () => {

        
    const newState = oldstate.filter((std) => std.key !== id)
       
      

        updateStandard(newState);
    }

    const updateText = (e) => {
        let value = e.target.value;
       
        const newState = oldstate.map((row) => {
            if(row.key === id)
            {
                    row.text = value;
                    return row;
            }
            else{
                return row
            }
           
        })
        updateStandard(newState);

        if (value === '') {

            setIcons([leftarrowLight, rightarrowLight, delIconLight, moveIconLight, true]);
        }
        else {
            setIcons([leftarrow, rightarrow, delIcon, moveIcon,false])
        }
    }


    return (
        <div>
          <div className="row">

                <div className="action">

                    <button disabled={icons[4]} onClick={move}><img src={icons[3]} alt="move" /></button>
                    <button disabled={icons[4]} onClick={outdent}><img src={icons[0]} alt="outdent" /></button>
                    <button disabled={icons[4]} onClick={indent}><img src={icons[1]} alt="indent" /></button>
                    <button disabled={icons[4]} onClick={deleteRow}><img src={icons[2]} alt="delete" /></button>

                </div>

                <div className={`standard${level}`}>
                    <div className="grayblock" ></div>
                    <input type="text" placeholder="Enter Standard her EX.Number" className={`editable${level}`} onChange={updateText} value={text} />
                </div>

            </div>
            <hr />
        </div>

    );

}