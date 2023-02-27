import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import Footer from "./Footer";
import Header from "./Header";

const EmpDetails = () => {
    const params = useParams()
    const empId = params.id
    const [empdata, setempData] = useState({})

    useEffect( () => {
        fetch('https://json-server-api-mb3t.onrender.com/employee/'+empId)
            .then( res => {
                return res.json();
            } )
            .then( resp => {
                setempData(resp)
            } )
            .catch( error => {
                console.log(error)
            } )
    } ,[] )
    
    return( 
        <>
            <Header />
            <div className="container">
                <div className="card" style={{textAlign: "left"}}>
                    <div className="card-title card-title-background text-white">
                        <h3 className="m-2">Employee Details</h3>
                    </div>
                    <div className="card-body">
                    { empdata &&
                        <div>


                            <table className="table table-bordered" >
                                <tbody>
                                    <tr>
                                        <td><h4>Employee Name</h4></td>
                                        <td><h4>{empdata.name}</h4></td>
                                    </tr>
                                    <tr>
                                        <h4 style={{color: "blue"}}>Contact Details</h4>
                                    </tr>
                                    <tr>
                                        <td><h4>Email Id</h4></td>
                                        <td><h4>{empdata.email}</h4></td>
                                    </tr>
                                    <tr>
                                        <td><h4>Phone</h4></td>
                                        <td><h4>{empdata.phone}</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to='/' className="btn btn-danger"><BiArrowBack style={{margin: "-3px 5px 0 0"}}/>Back</Link>
                            
                        
                        </div>
                    }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default EmpDetails