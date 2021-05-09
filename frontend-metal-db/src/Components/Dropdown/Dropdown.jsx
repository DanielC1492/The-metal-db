// import react from 'react';

const Dropdown = (props) => {    
    // console.log(props);
    const dropdownChanged = e => {
        props.changed(e.target.value);
        
    }    

    return (
        <div className="dropdownDiv">     
            <label className="genreDropdown">{props.label}</label>       
            <select onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
                <option key={0}>Select...</option>
                    {/* {props.options.map((item, idx) => <option key={idx + 1} value={dropdownChanged}>{item}</option>)} */}
            </select>            
        </div>
    );

   
}
export default Dropdown;