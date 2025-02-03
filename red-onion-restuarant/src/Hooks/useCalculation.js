import useFoodContext from "../Context/useFoodContext";

const useCalculation = () => {
    const {cart} = useFoodContext();
    let subTotal = 0 ;
    let Total= 0;
    let delivery= 0;
    let tax= 0;
    let totalQuantity = 0;
    for(const food of cart){
        if(!food.quantity){
            food.quantity = 1;
        }
        totalQuantity =totalQuantity + food.quantity; 
        subTotal = subTotal + food.price*totalQuantity;
        
        delivery = 20;
        tax = subTotal * (10/100);
        Total = subTotal + delivery + tax;
    }
    return {Total,subTotal,delivery,tax,totalQuantity};
};

export default useCalculation;