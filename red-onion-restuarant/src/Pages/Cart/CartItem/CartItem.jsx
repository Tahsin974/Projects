import useFoodContext from "../../../Context/useFoodContext";
import PropTypes from 'prop-types'; 
const CartItem = ({item}) => {
    const {name,price,img,quantity,id}= item;
    const {handleRemove} = useFoodContext();
    
    return (
        <div className="card card-side max-w-96 px-3 bg-white shadow-xl grid grid-cols-3 ">
            <figure>
                <img
                    src={img}
                    alt="Movie" />
            </figure>
            <div className="card-body col-span-2">
                <h2 className="card-title">{name}</h2>
                <p>Quantity: {quantity}</p>
                <p className="text-2xl font-bold text-red-600">${price}</p>
                <button onClick={()=>handleRemove(id)} className="btn btn-sm btn-error text-white">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
CartItem.propTypes = {
    item: PropTypes.node,
    
}