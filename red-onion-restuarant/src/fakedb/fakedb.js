const addToDB = (id) =>{
    const storedCart = getDB();
    if(storedCart[id]){
        storedCart[id] = storedCart[id] + 1;
    }
    else{
        storedCart[id] = 1;
    }
     updateDB(storedCart)
}

const getDB = () => {
   const exists =  localStorage.getItem('food_cart');
   return (exists ? JSON.parse(exists) : {});
}

const updateDB = (cart) =>{
    localStorage.setItem('food_cart',JSON.stringify(cart))
}

const removeFromDB = (id) => {
    const savedItem = getDB();
    delete savedItem[id]; 
    updateDB(savedItem);
}

const clearDB = () =>{
    localStorage.removeItem('food_cart');
}

export {addToDB,getDB,removeFromDB,clearDB}