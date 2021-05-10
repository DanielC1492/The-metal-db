import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import checkError from '../../tools/error.handlers';
import { Navbar } from '../../Components/Navbar/Navbar';
import background from '../../img/background-concert.jpg';


const Signup = (props) => {

    const history = useHistory();
    
    const [user,setUser] = useState({
        nickname:'',
        password: '',
        repeatPassword: '',
        name: '',
        email: '',
        country: ''
       
    });

    const [message,setMessage] = useState('');

    const stateHandler = (event) => {
        setUser({...user, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }



    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            nickname: user.nickname,
            password: user.password,
            name: user.name,
            email: user.email,
            country: user.country
        };

        // console.log(body)


        //Error management

        setMessage('');

        let errorMessage = checkError(body);
        
        setMessage(errorMessage);

        if(errorMessage){
            return;
        }

        const data = await axios.post('http://localhost:8000/api/register', user)
        console.log(data);


        return setTimeout(() => {
            history.push('/login')
        }, 1000);
          
  
    };
    
    return (
        <>
        <Navbar/>
        <div className="signupContainer" style={{ backgroundImage: `url(${background})`}}>
            <div className='black'>
                
                <div className="formWindow">
                    <p>Nickame:</p>
                    <input
                        className='signupInputs' 
                        type="text" 
                        maxLength="30" 
                        placeholder="maiden666" 
                        name="nickname" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>

                    <p>Password:</p>
                    <input
                        className='signupInputs' 
                        type="password" 
                        maxLength="30" 
                        placeholder="Represen23" 
                        name="password" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>

                    <p>Repeat password:</p>
                    <input 
                        className='signupInputs'
                        type="password" 
                        maxLength="30" 
                        placeholder="Represen23"
                        target = 'password'
                        name="repeatPassword" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>
                        
                    <p>Name:</p>
                    <input
                        className='signupInputs'
                        type="text" 
                        maxLength="30" 
                        placeholder="Steve Harris" 
                        name="name" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>

                    <p>Email:</p>
                    <input 
                        className='signupInputs'
                        type="email" 
                        maxLength="50" 
                        placeholder="maiden666@gmail.com" 
                        name="email" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>

                    <p>Country:</p>
                    <input
                        className='signupInputs' 
                        type="text" 
                        maxLength="200" 
                        placeholder="Spain" 
                        name="country" 
                        onChange={stateHandler} 
                        onKeyDown={handleOnKeyDown}/>

                    <button 
                        className='loginBtn' 
                        onClick={()=> sendData()}>Send</button>

                    <div className='errorMessage'>{message}</div>
                </div>

                
                
            </div>
        </div>
               
        </>
    )
};

export default Signup



// <input type="text" name="newPassword" ref={register({
//   validate: (value) => value === watch('password')
// })} placeholder="Новый пароль" required/>