import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import './styles.css'
const BlockedUser = (props) => {
    return (  
        <div className='d-flex blocked_user col-5 m-2'>
            <div className="col-3 m-2 bg-light" style={{}}>
                <div className="avt">
                </div>      
            </div>
            <div className="col-6 my-auto">
                <h5>User A</h5>
            </div>
            <div className="col-3 my-auto" >
                <Button>Unblock</Button>
            </div>
        </div>
    );
}
 
export default BlockedUser;