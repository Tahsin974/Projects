import { useParams } from "react-router-dom";
import useFoodContext from "../../Context/useFoodContext";

const FoodDetails = () => {
    const { FoodID } = useParams();

    const { foods,handleAddToCart } = useFoodContext();

    if(!foods.length){
        return;
        
    }
    const food = foods.find(fd => fd.id == FoodID)
        const {name,img,price,ingredients,category} = food;
    
    


    return (
        <div className="hero bg-white min-h-screen min-w-screen">
            <div className="hero-content grid lg:grid-cols-3
             sm: grid-cols-1 gap-x-4 items-center">
                
                <div className="lg:col-span-2 grid grid-cols-3">
                    <div className="lg:col-span-2 col-span-3">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="text-2xl py-3">
                        {category}
                    </p>
                    <p className="py-6">
                        {ingredients}
                    </p>
                    <h1 className="text-4xl font-bold">${price}</h1>
                    <button onClick={()=>handleAddToCart(food)} className="btn btn-error text-white my-3">Add To Cart</button>
                    </div>
                    
                </div>
                <img
                    src={img}
                    className=""
                     />
                     
            </div>
        </div>
    );
};

export default FoodDetails;