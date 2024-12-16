import { useEffect, useState } from "react";
import { RES_INFO } from "./constants";

const useRestaurantMenu = (resID) => {
    const[resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch (RES_INFO + resID);
        const json = await data.json();
        setResInfo(json?.data)

    }
    return resInfo;
}

export default useRestaurantMenu;