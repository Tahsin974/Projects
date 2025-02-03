import Rating from "react-rating";
import PropTypes from 'prop-types';


const Course = ({course,handleEnRollBtn}) => {
  
    const { name, img, description, price, rating } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="text-2xl">Price: ${price}</p>

                <Rating
                    emptySymbol="fa-regular fa-star"
                    fullSymbol="fa-solid fa-star"
                    initialRating={rating}
                    readonly
                    className=" text-yellow-400"
                />

                <div className="card-actions justify-end">
                    <button onClick={()=>handleEnRollBtn(course)} className="btn bg-yellow-300 text-blue-800 hover:bg-yellow-400">Select Course</button>
                </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.node,
    handleEnRollBtn: PropTypes.node,
    
  };


export default Course;