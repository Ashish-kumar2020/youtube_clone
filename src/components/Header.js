import Logo from '../assets/img/Logo.svg'
import  '../../style.css'

const Header = () => {

    const Title = ()=>(
        <>
            <a href="/">
                <img className="h-20 pl-32 py-4" alt="logo" src={Logo} />
            </a>
        </>
    );

  return (
    <>
        <div className="main-header h-20  flex justify-between">
            <Title/>    
            
            <div className="nav-items">
                <ul className="flex py-6">
                    <li className="pr-24 list-item"><i class="fa-sharp fa-solid fa-magnifying-glass dummy"></i>Search</li>
                    <li className="pr-20 list-item"><i class="fa-solid fa-tag dummy"></i>Offers</li>
                    <li className="pr-20 list-item"><i class="fa-solid fa-circle-info dummy"></i>Help</li>
                    <li className="pr-20 list-item"><i class="fa-solid fa-user dummy"></i>Sign In</li>
                    <li className="pr-20 list-item"><i class="fa-solid fa-cart-shopping dummy"></i>Cart</li>
                </ul>
            </div>
        </div>

    </>
  );
};

export default Header;
