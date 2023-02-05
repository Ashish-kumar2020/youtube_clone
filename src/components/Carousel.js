import  '../../style.css'
import CarouselCard from './CarouselCard';
import { useEffect , useState} from 'react';


const Carousel = ()=>{

    const [carouselData, setCarouselData] = useState([]);

    useEffect(()=>{
        getApiCall();
    },[]);   

    async function getApiCall() {
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
    }
   
    return(
        <>
            <div className='carousel flex'>
                {carouselData.map((cardData) => {
                    return (
                        <CarouselCard key = {cardData.data.bannerId} {...cardData.data}/> 
                    )
                })}
            </div>
        </>
    )
}

export default Carousel;

