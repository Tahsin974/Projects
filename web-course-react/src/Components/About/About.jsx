import { useEffect, useState } from "react";
import Trainer from "../Trainer/Trainer";

const About = () => {
    const [trainers,setTrainer] = useState([])
    useEffect(()=>{
        fetch('./trainers.json')
        .then(res=> res.json())
        .then(data=> setTrainer(data))
    },[])
    return (
        <div className="min-h-screen col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-10 ">
        {
            trainers.map(trainer => <Trainer
            
            key={trainer.ID}
            trainer={trainer}
            
            ></Trainer>)
        }
        
        </div>
    );
};

export default About;