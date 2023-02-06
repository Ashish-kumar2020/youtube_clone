import Logo from '../assets/img/Logo.svg'
import  '../../style.css'
import { Link } from "react-router-dom";
const Header = () => {

    const Title = ()=>(
        <>

            <Link to="/">
                <img className="h-20 pl-32 py-4" alt="logo" src={Logo} />
            </Link>
        </>
    );

  return (
    <>
        <div className="main-header h-20  flex justify-between">
            <Title/>    
            
            <div className="nav-items">
                <ul className="flex py-6">
                   <Link to="/search"> <li className="pr-16 list-item"><i className="fa-sharp fa-solid fa-magnifying-glass dummy"></i>Search</li>  </Link> 
                  <Link to="/offer"><li className="pr-16 list-item"><i className="fa-solid fa-tag dummy"></i>Offers</li></Link> 
                   <Link to="/help"><li className="pr-16 list-item"><i className="fa-solid fa-circle-info dummy"></i>Help</li></Link> 
                   <Link to="/signin"><li className="pr-16 list-item"><i className="fa-solid fa-user dummy"></i>Sign In</li></Link> 
                  <Link to="/cart"> <li className="pr-16 list-item"><i className="fa-solid fa-cart-shopping dummy"></i>Cart</li></Link> 
                </ul>
            </div>
        </div>

    </>
  );
};

export default Header;
