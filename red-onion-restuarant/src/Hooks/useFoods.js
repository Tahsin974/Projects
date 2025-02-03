import { useEffect } from "react";
import { useState } from "react";
import { addToDB, getDB, removeFromDB } from "../fakedb/fakedb";

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [displayFoods, setDisplayFoods] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setDisplayFoods(data)
            }
            )
    }, [])

    const handleForm = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;
        const matchedFood = foods.filter(food => food.name.toLowerCase().includes(searchText.toLowerCase()))
        
        
        setDisplayFoods(matchedFood)
        event.target.search.value = '';
    }


    const handleFilter = filter => {

        const filterFoods = foods.filter(food => food.category === filter);
        setDisplayFoods(filterFoods);
        console.log(displayFoods)


    }

    useEffect(() => {
        if (foods.length) {
            const savedCart = getDB();
            let storedCart = [];
            for (const id in savedCart) {
                const addedFood = foods.find(fd => fd.id == id)
                if (addedFood) {
                    const quantity = savedCart[id];
                    addedFood.quantity = quantity;
                    storedCart.push(addedFood)
                }

            }
            setCart(storedCart)
        }
    }, [foods])


    const handleAddToCart = (food) => {
        const exist = cart.find(fd => fd.id == food.id);
        let newCart = []
        if (exist) {
            exist.quantity = exist.quantity + 1;
            const rest = cart.filter(fd => fd.id != food.id)
            newCart = [...rest, exist]
        }
        else{
            newCart = [...cart,food];
        }

        setCart(newCart);
        addToDB(food.id)
    }
    const handleRemove = (id) => {
        const newCart = cart.filter(fd => fd.id != id)
        setCart(newCart);
        removeFromDB(id);
    }
    

    



    return {
        displayFoods, handleFilter, foods, setDisplayFoods, handleAddToCart, cart,handleRemove,setCart,handleForm
    };
};

export default useFoods;