import { useState } from "react";
import MenuItems from "./MenuItems";
const NestedCategory = ({nestedData}) => {

    const [showItems, setShowItems] = useState(false);

    const clickHandler = () => {
      setShowItems(!showItems);
    };

    return (
        <div>
            <div key={nestedData.title} className="text-base font-medium border-b-2 py-2 flex justify-between cursor-pointer"
            onClick={clickHandler}>
            <span>{nestedData.title}</span>
            <span>🔽</span>
            </div>

          <div>{showItems && <MenuItems items={nestedData} />}</div>
        </div>
        
    )
}

export default NestedCategory;