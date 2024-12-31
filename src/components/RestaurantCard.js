import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

//restaurant Card Component
const RestaurantCard = (props) =>{
    const {loggedInUser} = useContext(UserContext);
    
    const {resData} = props;
    const {name,costForTwo,cuisines,avgRating, cloudinaryImageId} = resData?.info;
    
    return (
        <div className="bg-gray-200 w-52 p-4 m-1 hover:bg-gray-400 rounded-lg">
            
            <img className="w-[200px] rounded-md" alt="res-img" src={
                IMG_URL + cloudinaryImageId}/>
            <h3 className="text-base font-medium my-2">{name}</h3>
            <h4 className="text-sm my-1">{cuisines.join(", ")}</h4>
            <div className="flex justify-between" >
            <h4 className="text-sm my-1">{avgRating}⭐</h4>
            <h4 className="text-sm my-1">{costForTwo}</h4>
            </div>
            <h4 className="text-sm my-1">{loggedInUser}</h4>

        </div>
    )
}


//promoted restaurant card with Discount 
//input Restaurant card 
export const WithDiscountLabel = (RestaurantCard) => {

    return (props) => {
        const {resData} = props;
        const {header, subHeader} = resData.info.aggregatedDiscountInfoV3;
        
    return (
    <div className="">
        
        <div className="text-slate-700 font-bold absolute ">
        {header + " " + subHeader}
        </div>
       
        <RestaurantCard {...props} />
    </div>
    )
    }
    
}

export default RestaurantCard;