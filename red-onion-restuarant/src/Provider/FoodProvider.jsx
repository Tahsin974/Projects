import { createContext } from "react";
import useFoods from "../Hooks/useFoods";
import PropTypes from 'prop-types';


export const FoodContext = createContext();
const FoodProvider = ({children}) => {
    const AllContent = useFoods();
    return (
        <FoodContext.Provider value={AllContent}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;
FoodProvider.propTypes ={
    children: PropTypes.node,
}