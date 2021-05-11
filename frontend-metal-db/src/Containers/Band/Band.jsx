import background from '../../img/background-concert.jpg';
import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar, NavbarProfile } from '../../Components/Navbar/Navbar';
import {connect} from 'react-redux';

const Band = (props) => {
    
    console.log(props);
    const history = useHistory();

    const [msgError, setMsgError] = useState('');
    return (
    <>
        <Navbar></Navbar>
        <div className='bandContainer' style={{ backgroundImage: `url(${background})`}} >
            <div className='black'>
                <div className='bandForm'>
                    <div className='bandLeft'>{
                        props.band?.map((props, index) =>{
                        return(
                            <div className='sugestLeft' key={index}>
                            <div className='bandImg'>
                                    <img className='bandImg'  src={props.image}></img>
                                </div>
                                <div className='sugestRight'>
                                    <div className='bandName'> {props.name}</div>
                                    <div className='bandGenres'>{props.genre}</div>
                                    <div className='bandGenres'>{props.country}</div>
                                </div>
                            
                                </div>
                            );
                            })
                        }    
                    </div>
                </div>
                
                
            </div>                    
        </div>
    </>
    )
}

const mapStateToProps = state => {
    return {
        band: state.bandsReducer.band
        
    }
}

export default connect(mapStateToProps) (Band);
