import { useEffect } from "react"

const Body = () => {
    // useEffect(()=>{
    //     getApiCall();
    // },[]);   

    // AIzaSyDKxO6SxmdQsHvvsS6QQrSKx38CpFmh94s

//    https://www.youtube.com/youtubei/v1/att/get?key=AIzaSyDKxO6SxmdQsHvvsS6QQrSKx38CpFmh94s&prettyPrint=false

    async function getApiCall() {
        const data = await fetch(" https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBYO1s1nEoVl7OfWKutvYa2e1tFVEqLw8M&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=30 ");
        const json = await data.json();
        console.log(json);
    }
   

    return(
        <h1>Body</h1>
    )
}

export default Body;