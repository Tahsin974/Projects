import { useContext } from "react";
import { FoodContext } from "../Provider/FoodProvider";

const useFoodContext = () => {
    return (
        useContext(FoodContext)
    );
};

export default useFoodContext;