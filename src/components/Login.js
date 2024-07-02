import React, { Fragment, useState } from "react";  

const Login = () => {

    const [usario, setUsuario] = useState(false)
    const [password, setPassword] = useState(false)

    const [isEmptyUser, setIsEmptyUser] = useState(false)

    const getDataUser = () => {
      
        if (!usario || !password) {
            setIsEmptyUser(true)
            alert('neseccita informacion')
        }else{
            setIsEmptyUser(false)
            let objeto = {
                nombre:usario,
                contraseña:password,
            }
            console.log(objeto);
        }
    }

    const handleOnChangeUser = (event) => {
       setUsuario(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
     }

  
    return (
     <Fragment>
         <h1>Login</h1>

        
            <input onChange={handleOnChangeUser} name="usuario" style={{width: '250px', height: '20px'}} placeholder="ingresa tu usuario"  />
            <br />
            {isEmptyUser ? 'Llene este campo' : null}
            <input type='password' onChange={handleOnChangePassword} style={{width: '250px', height: '20px'}} placeholder="ingresa tu contraseña" />
            <br />  <br />
            <button  onClick={()=> getDataUser()}>Ingresar</button>
        
     </Fragment>
    )
}

export default Login;