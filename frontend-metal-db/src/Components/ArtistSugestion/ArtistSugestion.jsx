import React from 'react';


const ArtistSugestion = (props) => {

    if (props.title)
    return <div className='posterDiv' onClick={()=>props.onClick(props.index)}>{props.title}</div>;
    else
    return <div className='posterDiv' onClick={()=>props.onClick(props.index)} style={{backgroundImage:`url(${props.src})`}}></div>;

}


export default ArtistSugestion;