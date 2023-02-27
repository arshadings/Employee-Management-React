import { BiError } from "react-icons/bi";

const FallbackUI = () => {
    return(
        <>
            <div className="bg center-bg">
                <div>
                    <h3 className="error-404"><BiError style={{marginTop: "-25px"}}/>404<br /><p style={{fontSize: "24px"}}>Please check the URL</p></h3>
                </div>
            </div>
        </>
    )
}

export default FallbackUI