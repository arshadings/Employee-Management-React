import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const[id, setId] = useState('')
    const[firstname, setFirstname] = useState('')
    const[lastname, setLastname] = useState('')
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[gender, setGender] = useState('')

    const navigate = useNavigate()

    const[idvalidation, setIdvalidation] = useState(false)
    const[firstnamevalidation, setFirstnamevalidation] = useState(false)
    const[lastnamevalidation, setLastnamevalidation] = useState(false)
    const[passwordvalidation, setPasswordvalidation] = useState(false)
    const[emailvalidation, setEmailvalidation] = useState(false)
    const[phonevalidation, setPhonevalidation] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj = { id, firstname, lastname, password, email, phone, gender }

        if(id.length == 0){
            setIdvalidation(true)
        }
        if(firstname.length==0){
            setFirstnamevalidation(true)
        }
        if(lastname.length==0){
            setLastnamevalidation(true)
        }
        if(password.length==0){
            setPasswordvalidation(true)
        }
        if(email.length==0){
            setEmailvalidation(true)
        }
        if(phone.length==0){
            setPhonevalidation(true)
        }



        if( id.length !=0 &&
            firstname.length!=0 && 
            lastname.length!=0 && 
            password.length!=0 && 
            email.length!=0 && 
            phone.length != 0 ){
            fetch("https://json-server-api-mb3t.onrender.com/user", {
                method: "POST",
                headers: {'content-type':'application/json'},
                body: JSON.stringify(regobj)
            })
            .then(res => {
                toast.success("Registered Successfully")
                navigate("/login")
            })
            .catch( error => {
                toast.error("Failed: "+error.message)
            } )
        }



    }
    return(
        <>
        <div className="bg">
          <div className="background">
            <form className="container" onSubmit={ handleSubmit }>
                <div className="register-form-style">
                    <div className="register-title">
                        <h1>User Registration</h1>
                    </div>

                    <div className="card-body">
                        <div className="row">
            
                            <div className="col-lg-6 margin-top">
                                <div className="form-group">
                                    <label className="text-left margin-top">First Name<span className="err-msg">*</span></label>
                                    <input type="text" className="no-outline register-input-box  width" value={firstname} onChange={e => setFirstname(e.target.value)}></input>
                                    { firstname.length == 0 && firstnamevalidation && <span className="text-warning text-left">Enter the first name</span> }<br />
                                </div>
                            </div>

                            <div className="col-lg-6 margin-top">
                                <div className="form-group">
                                    <label className="text-left margin-top">Last Name<span className="err-msg">*</span></label>
                                    <input type="text" className="no-outline register-input-box  width" value={lastname} onChange={e => setLastname(e.target.value)}></input>
                                    { lastname.length == 0 && lastnamevalidation && <span className="text-warning text-left">Enter the last name</span> }<br />
                                </div>
                            </div>

                            <div className="col-lg-6 margin-top">
                                <div className="form-group">
                                    <label className="text-left margin-top">Username<span className="err-msg">*</span></label>
                                    <input type="text" className="no-outline register-input-box  width" value={id} onChange={e => setId(e.target.value)}></input>
                                    { id.length == 0 && idvalidation && <span className="text-warning text-left">Enter the username</span> }<br />
                                </div>
                            </div>

                            <div className="col-lg-6 margin-top">
                                <div className="form-group">
                                    <label className="text-left margin-top">Password<span className="err-msg">*</span></label>
                                    <input type="password" className="no-outline register-input-box  width"  value={password} onChange={e => setPassword(e.target.value)}></input>
                                    { password.length == 0 && passwordvalidation && <span className="text-warning text-left">Enter the password</span> }
                                </div>
                            </div>

                            <div className="col-lg-6 margin-top">
                                <div className="form-group">
                                    <label className="text-left margin-top">Email<span className="err-msg">*</span></label>
                                    <input type="email" className="no-outline register-input-box  width" value={email} onChange={e => setEmail(e.target.value)}></input>
                                    { email.length == 0 && emailvalidation && <span className="text-warning text-left">Enter the email</span> }
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="text-left margin-top">Phone<span className="err-msg">*</span></label><br />
                                    <input type="number" className="no-outline register-input-box width" value={phone} onChange={e => setPhone(e.target.value)}></input>
                                    { phone.length == 0 && phonevalidation && <span className="text-warning text-left">Enter the phone</span> }<br />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group  margin-top">
                                        <label className="text-left">Gender</label><br />
                                        <input type="radio" name="gender" value="male" className="app-check text-left"  checked={gender==="male"} onChange={e => setGender(e.target.value)} />
                                        <label className="text-left" style={{margin: "-5px 15px 0 0 " }}>Male</label>
                                        
                                        <input type="radio" name="gender" value="female" className="app-check text-left" checked={gender==="female"} onChange={e => setGender(e.target.value)}/>
                                        <label className="text-left" style={{marginTop: "-5px"}}>Female</label><br />
                                </div>
                            </div>

                        
                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit" className="register-button">Register</button><br />
                        <p>Already a Registered user ? <Link to={'/login'} className="text-white no-underline">Login here</Link></p>
                    </div>
                </div>
            </form>
          </div> 
          </div> 
        </>
    )
}

export default Register
