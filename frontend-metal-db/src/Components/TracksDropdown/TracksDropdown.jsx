
import React from 'react'

const TracksDropdown = (props) => {

    console.log(props);
    const dropdownModified = e => {
        props.changed(e.target.value);
        
    }    

    return (
        <div className="dropdownDiv">     
            <label className="genreDropdown">{props.label}</label>       
            <select onChange={dropdownModified} className="form-control form-control-sm col-sm-10">
                <option key={0}>Select...</option>
                    {/* {props.data.tracks.map((item, idx) => <option key={idx + 1} value={dropdownModified}>{item}</option>)} */}
            </select>            
        </div>
    );
}

export default TracksDropdown
