import Rating from "react-rating";
import  PropTypes  from "prop-types";
const ReviewItem = ({course,handleRemove}) => {
    
    const { name, img, description, price, rating,ID } = course;
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

                <div  className="card-actions justify-end">
                    <button onClick={()=>handleRemove(ID)} className="btn bg-sky-500 text-white hover:bg-sky-700">Remove</button>
                </div>
            </div>
        </div>
    );
};
ReviewItem.propTypes = {
    course: PropTypes.node,
    handleRemove: PropTypes.node,
}

export default ReviewItem;