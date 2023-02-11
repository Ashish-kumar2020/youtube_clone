import { useEffect, useState } from "react";


const MenuCard = (props) => {
  const [modalState, setModalState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [btnClickId, setBtnClickId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemIsVeg, setItemIsVeg] = useState(true);
  const [productPrice, setProductPrice] = useState("");
 
const closeModal = ()=>{
  setShowModal(false)
}
  
  return (
    <>
   
        {showModal ? (
            <>
              <div className="outer-modal cursor-pointer" onClick={()=>{closeModal()}}>
                <div className="modal">  
                <img className="modalImg"
                      src={

                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/" + btnClickId
                      }
                      alt={btnClickId + Image}
                    />
                    <h2 className="pb-2 itemIsVeg">{itemIsVeg ? "🟢" : "🔴"}</h2>
                  <h2 className="pb-2 itemName">{itemName}</h2>
                  <h2 className="pb-5 productPrice">{"₹" + productPrice / 100}</h2>
                  
                </div>

              </div>
            </>
        ) : null}
   
      <div className="menuItems">
        <ul className="detail-list">
          <div className="flex flex-wrap">
            {Object.values(props.menu).map((item) => (
              <li className="flex foodItemList" key={item.id}>
                {/* {item.name}  */}

                <div className="fooddetails">
                  <h2 className="pb-2">{item.isVeg ? "🟢 " : "🔴"}</h2>
                  <h2 className="pb-2">{item.name}</h2>
                  <h2 className="pb-5">{"₹" + item.price / 100}</h2>
                  <p className="pb-2 food-description">
                    {item.description.substring(0, 100)}
                  </p>
                </div>
                <div className="foodImg">
               
                  <button
                    onClick={() => {
                        setShowModal(true);
                        setBtnClickId(item.cloudinaryImageId);
                        setItemName(item.name);
                        setProductPrice(item.price);
                      
                    }}
                  >
                    {/* <Modal/> */}
                    <img
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/" +
                        item.cloudinaryImageId
                      }
                      alt=""
                    />
                  </button>
                  
                </div>
              </li>
            ))}
           
          </div>
        </ul>
      </div>
      {/* <Modal/> */}
    </>
  );
};

export default MenuCard;
