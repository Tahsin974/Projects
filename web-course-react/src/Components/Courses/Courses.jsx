import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayCourses, setDisplayCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                setDisplayCourses(data)
        })
    }, [])

    useEffect(() => {
        if (courses.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedCourse = courses.find(course => course.ID === key);
                if (addedCourse) {
                    storedCart.push(addedCourse);
                }
            }
            setCart(storedCart);
        }
    }, [courses])

    const handleEnRollBtn = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        addToDb(course.ID)
    }
    
    const handleSearch = event=>{
        const searchText = event.target.value;
        const matchedProducts = courses.filter(course => course.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayCourses(matchedProducts)
    }
    return (
        <>
            <div className="space-y-16 py-24 bg-blue-800 	">
                <h1 className="text-4xl text-center text-white">Find Your Preferred Courses & Improve Your Skills
                </h1>
                <label className="input input-bordered flex items-center gap-2 w-3/5 mx-auto">
                    <input onChange={()=>handleSearch(event)} type="text" className="grow" placeholder="Search" />
                </label>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 py-6">

                <div className="col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-3 ">
                    {
                        displayCourses.map(course => <Course
                            key={course.ID}
                            course={course}
                            handleEnRollBtn={handleEnRollBtn}
                        ></Course>)
                    }
                </div>

                <div className=" border-l-2 px-3">
                    <Cart
                        cart={cart}
                    >
                        <Link to='/review'>
                        <button className=" btn my-9 btn-wide bg-yellow-300 text-blue-800 hover:bg-yellow-400">
                            Enroll Review
                        </button>
                        </Link>

                    </Cart>
                </div>
            </div>
        </>

    );
};

export default Courses;