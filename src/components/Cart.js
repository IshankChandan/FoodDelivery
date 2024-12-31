import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {

    const cartSelector = useSelector((store) => store.cart.items)

    console.log(cartSelector)
    return (
        <div>
           <CartItems cart = {cartSelector}/>
        </div>
    )
}

export default Cart;