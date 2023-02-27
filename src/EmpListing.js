import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Header from "./Header";



const EmpListing = () => {
    const[empdata, setempData] = useState(null)
    const  navigate = useNavigate()

    const params = useParams()
    const empId = params.id

    const EmpEdit = (id) => {
        navigate('/editEmployeeDetails/'+id)
    }

    const EmpDetails = (id) => {
        navigate('/viewEmployeeDetails/'+id)
    }

    const EmpDelete = (id) => {
        if(window.confirm(`Do you want to remove the employee with id ${id} ?` )){
            fetch("https://json-server-api-mb3t.onrender.com/employee/"+id, {
                method: "DELETE",
            })
            .then( res => {
                alert("Employee Deleted Successfully")
                window.location.reload();
            } )
            .catch( error => {
                console.log(error)
            })
        }

    }


    useEffect( () => {
        fetch('https://json-server-api-mb3t.onrender.com/employee')
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
        <div>
            <Header />
            <div className="container" >
                <div className="card" style={{marginBottom: "20px"}}>
                    <div className="card-title card-title-background text-white">
                        <h2 className="my-2">List of Employees</h2>
                    </div>
                    
                    <div className="card-body">
                        <div className="add-btn">
                            <Link to='/createEmployee' className=" btn btn-success">Add Employee<AiOutlineUserAdd style={{margin: "-3px 0 0 5px"}} size={20}/></Link>
                        </div>
                    
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                            { empdata &&
                                empdata.map( item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={ () => { EmpEdit(item.id) } } className="btn btn-success">Edit <AiTwotoneEdit style={{margin: "-3px 0 0 0"}} /></a>
                                            <a onClick={ () => { EmpDetails(item.id) } } className="btn btn-primary">Details<BiMessageSquareDetail style={{margin: "-3px 0 0 5px"}}/></a>
                                            <a onClick={ () => { EmpDelete(item.id) } } className="btn btn-danger">Delete<MdDelete style={{margin: "-1px 0 0 2px"}}/></a>
                                        </td>
                                    </tr>
                                ) )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>  
            </div>
            <footer className='bg-dark text-white'>
                By Arshad with love<FaHeart style={{margin: "-3px 0 0 5px"}}/>
            </footer>
            
        </div>
    )
}

export default EmpListing