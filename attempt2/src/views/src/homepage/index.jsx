import { Link } from "react-router-dom";

const Homepage = () => {
    return (<div>
        <h2>Home</h2>
        <Link to='/profile'>Profile</Link>
    </div>  );
}
 
export default Homepage;