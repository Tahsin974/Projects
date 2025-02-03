import useFoods from "../../../Hooks/useFoods";

const Categories = () => {
    const {handleFilter} = useFoods();
    return (
        <div>
            <button onClick={()=>handleFilter('breakfast')} className="btn btn-outline btn-secondary">Breakfast</button>

            
        </div>
    );
};

export default Categories;