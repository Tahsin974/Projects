import { useNavigate } from "react-router-dom";
import useFoodContext from "../../../Context/useFoodContext";
import useCalculation from "../../../Hooks/useCalculation";
import CartItem from "../CartItem/CartItem";
import { clearDB } from "../../../fakedb/fakedb";
import congo from "../../../images/icons/congo.png"

const Cart = () => {
    const { cart, setCart } = useFoodContext();
    const { subTotal, delivery, tax, Total } = useCalculation();
    const navigate = useNavigate();
    const handlePlace = () => {
        setCart([]);
        clearDB();
        navigate('/home')
    }

    return (
        <div className="grid lg:grid-cols-3 my-5 px-5 gap-4">
            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-3">
                {
                    cart.map(item => <CartItem
                        key={item.id}
                        item={item}
                    ></CartItem>)
                }

            </div>
            <div className="card bg-white max-w-96 max-h-64 shadow-xl items-center justify-center text-2xl p-4 font-semibold">
                <h3>SubTotal: ${subTotal.toFixed(2)}</h3>
                <h3>Delivery Fee: ${delivery}</h3>
                <h3>Tax: ${tax.toFixed(2)}</h3>
                <h3>Total: ${Total.toFixed(2)}</h3>
                <button className="btn btn-wide my-2 btn-error text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>PlaceOrder</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-3xl text-center">!!!Congratulations!!!</h3>
                        <div className="py-4">
                            <figure >
                                <img src={congo} className="w-1/4" />
                            </figure>
                        </div>
                        <h3 className="font-bold text-3xl text-center">Purchase Successfull</h3>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-error text-white" onClick={handlePlace}>Back To Home</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>




        </div>
    );
};

export default Cart;