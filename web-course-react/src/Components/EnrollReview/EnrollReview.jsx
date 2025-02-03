
import useCourse from "../../Hooks/useCourse";
import useCart from "../../Hooks/useCart";
import Cart from "../Cart/Cart";

import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import img from '../../Images/giphy.gif'
import { Link } from "react-router-dom";



const EnrollReview = () => {
    const [courses] = useCourse();
    const [cart, setCart] = useCart(courses);
    const handleRemove = (ID) => {
        const newCart = cart.filter(course => course.ID !== ID)
        setCart(newCart)
        deleteFromDb(ID);
    }
    const handleEnroll = () =>{
       setCart([]);
       clearTheCart();
    }
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 py-6">

                <div className="col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 ps-3 ">
                    {
                        cart.map(course => <ReviewItem
                            key={course.ID}
                            course={course}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }

                </div>

                <div className=" border-l-2 px-3">
                    {
                        cart.length ? <Cart
                        cart={cart}
                    >
                       
                       
                        <label onClick={handleEnroll} htmlFor="my_modal_6" className="btn btn my-9 btn-wide bg-sky-500 text-white hover:bg-sky-700">Enroll</label>

                        
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Congratulations...For your successfully Enrolled</h3>
                                <div className="py-4">
                                    <img src={img} alt="" />
                                </div>
                                <div className="modal-action">
                                    <Link to='/home'>
                                    <label  htmlFor="my_modal_6" className="btn btn-wide bg-sky-500 text-white hover:bg-sky-700">Back To Home</label>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Cart>
                    :
                    <Cart
                        cart={cart}
                    >
                       
                       
                        <label onClick={handleEnroll} htmlFor="my_modal_6" className="btn btn my-9 btn-wide bg-sky-500 text-white hover:bg-sky-700 btn-disabled" >Enroll</label>

                        
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Congratulations...For your successfully Enrolled</h3>
                                <div className="py-4">
                                    <img src={img} alt="" />
                                </div>
                                <div className="modal-action">
                                    <Link to='/home'>
                                    <label  htmlFor="my_modal_6" className="btn btn-wide bg-yellow-300 text-blue-800 hover:bg-yellow-400">Back To Home</label>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Cart>
                    }
                </div>
            </div>
        </>
    );
};

export default EnrollReview;