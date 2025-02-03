import { useParams } from "react-router-dom";

const Booking = () => {
    const {serviceID} = useParams();
    return (
        <div>
            <h1 className="text-5xl text-center">Booking {serviceID}</h1>
        </div>
    );
};

export default Booking;