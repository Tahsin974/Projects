import { useEffect, useState } from "react";
const useReasons = () => {
    const [reasons,setReasons ] = useState([]);
    useEffect(()=>{
        fetch('./reason.json')
        .then(res => res.json())
        .then(data => setReasons(data))
    },[])
    return{
        reasons
    };
};

export default useReasons;