import React from 'react'

const Header = () => {
  return (
    <div className='nav-bar grid grid-flow-col'>
        <div className='left-div flex mx-[14px] col-span-1'>
            <img className='w-[50px] h-[50px] mx-[17px] hover:cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" alt="sidebarImg"/>
           <a href="/">
            <img className='w-[110px] h-[70px] my-[-11px]' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtubeLogo" />

           </a>
        </div>
        <div className='middle-div col-span-1 my-[5px]'>
            <input type="text" className='w-[440px] h-[40px] p-[12px] border border-gray-400 rounded-l-full' placeholder='Search text....' />
            <button className='h-[40px] w-[50px] border border-gray-400 rounded-r-full'>🔍</button>
        </div>
        <div className='right-div'>

        </div>
    </div>
  )
}

export default Header