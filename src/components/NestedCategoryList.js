import NestedCategory from "./NestedCategory";

const NestedCategoryList = ({ data }) => {
 
  return (
    <div>
      {data.categories.map((cat) => (<div>
            <NestedCategory  nestedData = {cat}/>
      </div>
      ))}
    </div>
  );
};

export default NestedCategoryList;
