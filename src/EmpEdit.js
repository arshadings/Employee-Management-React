import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify"

import Footer from "./Footer";
import Header from "./Header";

const EmpEdit = () => {
      const params = useParams()
      const empId = params.id

    useEffect( () => {
        fetch("https://json-server-api-mb3t.onrender.com/employee/"+empId)
            .then( res => {
                return res.json();
            } )
            .then( resp => {
               setId(resp.id)
               setName(resp.name)
               setEmail(resp.email)
               setPhone(resp.phone)
               setActive(resp.active)
            } )
            .catch( error => {
                console.log(error)
            } )
    } ,[] )


    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[active, setActive] = useState(true)
    const navigate = useNavigate()

    const[namevalidation, setnameValidation] = useState(false)
    const[emailvalidation, setemailValidation] = useState(false)
    const[phonevalidation, setphoneValidation] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const empData = {id, name, email, phone, active}
        
        if(name.length==0){
            setnameValidation(true)
        }
        if(email.length==0){
            setemailValidation(true)
        }
        if(phone.length==0){
            setphoneValidation(true)
        }

        if( name.length!=0 && email.length!=0 && phone.length != 0 ) {
        fetch("https://json-server-api-mb3t.onrender.com/employee/"+empId, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(empData)
        })
        .then( res => {
            toast.success("Employee Details Updated Successfully")
            navigate("/")
        } )
        .catch( error => {
            console.log(error)
            toast.error("Failed to update: ")
        })
    }

    }


    return(
        <>
        <Header />
            <div className="container">
                
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <form className="container" onSubmit={ handleSubmit }>

                            <div className="card" style={{textAlign: "left", marginTop: "30px"}}>
                                <div className="card-title m-0 card-title-background text-white" style={{textAlign: "center", marginTop: "10px"}}>
                                    <h2 className="my-2">Edit Employee Details</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" className="form-control"></input>

                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name<span style={{color: "red"}}>*</span></label>
                                                <input value={name} onChange={ e => setName(e.target.value) } className="form-control"></input>
                                                { name.length == 0 && namevalidation && <span className="text-danger">Enter the name</span> }
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Email<span style={{color: "red"}}>*</span></label>
                                                <input type="email" value={email} onChange={ e => setEmail(e.target.value)} className="form-control"></input>
                                                { email.length == 0 && emailvalidation && <span className="text-danger">Enter the email address </span> }
                                                
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Phone<span style={{color: "red"}}>*</span></label>
                                                <input type="number" value={phone} onChange={ e => setPhone(e.target.value)} className="form-control"></input>
                                                { phone.length == 0 && phonevalidation && <span className="text-danger">Enter the phone number</span> }
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-check">
                                            <input type="checkbox" checked={active} onChange={ e => setActive(e.target.checked) } className="form-check-input" required></input>
                                                <label className="form-check-label">Is Active</label>
                                            
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group" style={{ float: "right" }}>
                                                <Link to="/" className="btn btn-danger"><BiArrowBack style={{margin: "-3px 5px 0 0"}} />Back</Link>
                                                <button type="submit" className="btn btn-success" >Save<TiTick style={{margin: "-3px 0 0 2px"}} size={20}/></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default EmpEdit