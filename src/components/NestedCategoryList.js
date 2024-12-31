import { useState } from "react";
import NestedCategory from "./NestedCategory";

const NestedCategoryList = ({ data }) => {

  const[showIndex, setShowIndex] = useState();

  const checkIndex = (newIndex) => {
    newIndex === showIndex ? setShowIndex(null) : setShowIndex(newIndex)
  }
 
  return (
    <div>
      {data.categories.map((cat, index) => (<div key={cat.title}>
            <NestedCategory   nestedData = {cat}
            showItems = {index === showIndex ? true: false}
            checkIndex = {()=> {checkIndex(index)}}
            />
      </div>
      ))}
    </div>
  );
};

export default NestedCategoryList;
