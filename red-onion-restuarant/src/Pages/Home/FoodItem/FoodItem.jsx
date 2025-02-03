import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const FoodItem = ({ food }) => {
    const { id,name, img, description, price, category } = food;

    return (
        <div className="card bg-white  shadow-xl">
            <figure className="p-2 ">
                <img
                    src={img}
                    alt="Shoes"
                    className="w-2/4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><small>{category}</small></p>
                <p>{description}</p>
                <p className="text-3xl font-bold">${price}</p>
                <div className="card-actions  mt-3">
                    <Link to={`/food/${id}`}>
                    <button className="btn btn-error text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
FoodItem.propTypes = {
    food: PropTypes.node,
    
}