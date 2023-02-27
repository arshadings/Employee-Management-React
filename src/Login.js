import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const[userid, setUserid] = useState('')
    const[password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password');

    const navigate = useNavigate()
    
    const inputRef = useRef('')

    useEffect( () => {
        sessionStorage.clear()
        inputRef.current.focus()
    } , [] )

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
           fetch("https://json-server-api-mb3t.onrender.com/user/"+userid)
            .then( res =>{
                return res.json()
            } )
            .then( resp =>{
                console.log(resp)
                if( Object.keys(resp).length === 0 ) {
                    toast.error("Please Enter Valid Username")
                }
                else {
                    if(resp.password === password){
                        navigate('/')
                        sessionStorage.setItem("username", userid)
                    }
                    else
                        toast.error("Please Enter the Correct Password")
                }
            }  )
            .catch( error => {
                toast.error("Login Failed due to:"+error.message)
            } )
        }

    }

    const validate = () => {
        let result = true
        if(userid === '' || userid === null){
            result = false
            toast.warning("Please Enter Username")
        }
        if(password === '' || password === null){
            result = false
            toast.warning("Please Enter Password")
        }
        return result
    }

    const viewPassword = () => {
        console.log("clicked")
        if(passwordType==="password")
        {
         setPasswordType("text")
        return;
        }
        setPasswordType("password")      
    }

    return(
        <>
        <div className="bg">
            <div className="background">
                <form onSubmit={handleSubmit} className="container">
                    <div className="form-style">
                        <div className="login-title">
                            <p>Have an account ?</p>
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <BiUserCircle className="icon" size={20}/>
                                <input type="text"  size="25"className="input-box no-outline" ref={inputRef} placeholder="Username" value={userid} onChange={e => setUserid(e.target.value)}/>

                            </div>
                            <div className="form-group margin-left">
                                <BiLock className="icon" size={20}/>
                                
                                <input type={passwordType} name="password" size="25" className="input-box no-outline" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                {/* <FaRegEye className="password-icon" size={20} onClick={viewPassword}/> */}
                                { 
                                    passwordType==="password"? <FaRegEyeSlash className="password-icon" size={20} onClick={viewPassword}/> : <FaRegEye className="password-icon" size={20} onClick={viewPassword}/>
                                }

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="submit-button">Login</button><br />
                            {/* <Link to={'/register'} className="btn btn-success" >New User</Link> */}
                            <p>Don't have an account ? <Link to={'/register'} className="text-white no-underline">Create here</Link></p>
                        </div>

                    </div>

                </form>
            </div>
            </div>
        </>
    )
}

export default Login