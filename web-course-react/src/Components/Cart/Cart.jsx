
import PropTypes from 'prop-types';
const Cart = ({cart,children}) => {
    
    let name;
    let price;
    for(const course of cart){
         name = course.name;
         price = course.price;
    }
    
    return (
        <div className="space-y-5">
            <h1 className="text-2xl">Course-Name:{name}</h1>
            <h1 className="text-2xl">Course-Price:{price}</h1>
            {children}
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.node,
    children: PropTypes.node,
}

export default Cart;