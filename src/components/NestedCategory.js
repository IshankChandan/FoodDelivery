import { useState } from "react";
import MenuItems from "./MenuItems";
const NestedCategory = ({nestedData, showItems, checkIndex}) => {

    // const [showItems, setShowItems] = useState(false);

    const clickHandler = () => {
      checkIndex();
    };

    return (
        <div>
            <div className="text-base font-medium border-b-2 py-2 flex justify-between cursor-pointer"
            onClick={clickHandler}>
            <span>{nestedData.title}</span>
            <span>🔽</span>
            </div>

          <div>{showItems && <MenuItems items={nestedData} />}</div>
        </div>
        
    )
}

export default NestedCategory;