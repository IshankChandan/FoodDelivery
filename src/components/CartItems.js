import { useDispatch } from "react-redux";
import { FOOD_IMG } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
const CartItems = ({ cart }) => {
    const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart())
  }

return  cart.length === 0  ? (<div className="text-center my-4"><h1 className="text-3xl font-bold my-6">Oops! Your Cart is Empty </h1>
<h3 className="text-lg font-semibold">Please add some items to continue shopping</h3></div>) : (
    <div className="text-center m-auto w-6/12">
        <div><h1 className="text-2xl font-bold my-4">Cart</h1>

        <button className=" p-2 bg-red-500 rounded-lg text-white font-medium"
        onClick={emptyCart}>Empty Cart</button>
        </div>
      {cart.map((item) => (
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
          </div>
          <div className="w-3/12 p-4">
            <img
              src={FOOD_IMG + item.card.info.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
