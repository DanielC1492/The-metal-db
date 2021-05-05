import React from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';
import { ADMINLOGOUT } from '../../redux/types/adminTypes'

const Header = (props) => {
    const history = useHistory();

    const logOut = () => {
        
        props.dispatch({ type: LOGOUT, payload: {}});
        props.dispatch({ type: ADMINLOGOUT, payload: {}});
            
        setTimeout(() => {
            history.push('/')
        }, 1000);
    };
    console.log(props);
    

    return (
        <div className="headerContainer" >
             {
                props.user || props.user
                ?
                <>
                    <div>
                        {props.user.nickname}
                        {props.user.nickname} 
                        <div onClick={()=> logOut()}>logOut</div>

                    </div>
                </>
                :
                <>
                    <div>
                        {props.user.nickname}
                        {props.user.nickname} 
                        <button  onClick={()=> logOut()}>LogOut</button> 
                    </div>
                    </>
                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        admin: state.adminReducer.admin

    }
}

export default connect(mapStateToProps)(Header)





