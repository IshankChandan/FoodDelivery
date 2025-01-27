import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FOOD_IMG } from "../utils/constants";
const MenuItems = ({ items }) => {

  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.itemCards.map((item) => (
        <div
          className="p-2 m-2 border-b-2 flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="font-medium text-lg py-2 ">
              <span>{item.card.info.name}</span>
              <br />
              <span className="text-sm">
                ₹{" "}
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <div className="text-sm">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={FOOD_IMG + item.card.info.imageId}
              className="rounded-lg"
            />
            <button className="absolute text-sm font-bold bg-slate-100 text-green-400 cursor-pointer px-4 mx-8 shadow-lg rounded-lg hover:shadow-gray-500
            focus:outline-none focus:ring focus:ring-green-200 active:bg-slate-300"
            onClick={() =>handleClick(item)}>
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
