import useFoodContext from "../../../Context/useFoodContext";


import FoodItem from "../FoodItem/FoodItem";

const Foods = () => {
    const{displayFoods,handleFilter,foods,setDisplayFoods} = useFoodContext();

    return (
        <div className="my-2 px-10">
            <div className="flex justify-center my-3">
            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>setDisplayFoods(foods)}>All</button>
            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg " onClick={()=>handleFilter('breakfast')} >Breakfast</button>
            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>handleFilter('lunch')}>Lunch</button>
            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>handleFilter('dinner')}>Dinner</button>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
            {
                displayFoods.map(food => <FoodItem
                key={food.id}
                food={food}
                ></FoodItem>)
            }
            </div>
            
        </div>
    );
};

export default Foods;