//Body Component 

import RestaurantCard,{WithDiscountLabel} from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const[searchValue, setSearchvalue] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const RestaurantCardPromoted = WithDiscountLabel(RestaurantCard); 
    useEffect(()=> {
        const fetchData = async ()=>
        { const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
    
        //optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
        
        
    },[]);
    
    // if (listOfRestaurant.length === 0 ){
    //     return 
    // }

    //conditional rendering
    const online = useOnlineStatus(); 
    if(!online){
        return (
            <div>
                <h1>Oops! Something went wrong.</h1>
                <h2>You're not online</h2>
            </div>
        )
    }
    
    return listOfRestaurant.length === 0?(<Shimmer/>):
    (  
        <div className="body">
           
            <div className="flex flex-wrap justify-between text-center">    
                <div className="search">
                    <input className="searchText rounded-md px-5 bg-orange-100 m-5" value={searchValue} onChange={(e)=>setSearchvalue(e.target.value)} ></input>
                    <button className="search-btn bg-orange-200" 
                    onClick={
                        ()=>{
                            
                            const searchRes= listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                            setFilteredList(searchRes);
                        }
                        }>Search</button>
                </div>
                <div>
                     <button className="m-5 px-5 bg-slate-200 rounded-md text-black font-semibold" onClick={()=>{
                   const filteredList1 = listOfRestaurant.filter(
                    (res)=> res.info.avgRating > 4
                    );
                    setFilteredList(filteredList1);
                }}>Top Rated restaurant</button>
                </div>
               
            </div>
            <div className="flex flex-wrap ">
               { filteredList.map((restaurants) =>(
                    <Link to={"/restaurants/"+restaurants.info.id} key={restaurants.info.id}>
                        {restaurants.info.aggregatedDiscountInfoV3 ? <RestaurantCardPromoted resData={restaurants}/> :
                        <RestaurantCard  resData={restaurants} />}
                        </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;