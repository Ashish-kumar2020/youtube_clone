import Logo from "../assets/img/youtubeLogo.png";
import  '../../style.css'

const Header = () => {
  return (

    <>
    <div className="w-100% h-18 flex justify-between" >
        <div className="img-container flex ">
                <button><i className="fa-sharp fa-solid fa-bars px-6 fa-2x"></i></button>
                <a href="#">
                    <img className=" w-32 h-16 flex-wrap logo" alt="logo" src={Logo} />
                </a>
        </div>
        <div className="search-bar flex py-2">
            <input type="search" id="search" className="inputBox" placeholder="Search" required value="search"/>

           <button className="mic-icon"><i className="fa-sharp fa-solid fa-microphone px-3 py-2 fa-2x"></i></button> 
        </div>
        <div className="nav-items">
            <ul className="flex py-5">
                <button><a href="#"><li className="px-3"><i class="fa-sharp fa-solid fa-video-slash fa-2x"></i></li></a></button>
                <button><a href="#"><li className="px-3"><i class="fa-solid fa-bell fa-2x"></i></li></a></button>
                <button><a href="#"><li className="px-3"><i class="fa-sharp fa-solid fa-circle-user fa-2x"></i></li></a></button>
            </ul>
        </div>
    </div>

    </>
  );
};

export default Header;
