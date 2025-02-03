import useReasons from "../../../Hooks/useReasons";
import Reason from "../Reason/Reason";


const WhyChooseUs = () => {
    const {reasons} = useReasons();
    return (
        <div className="my-4 space-y-9 px-3">
            <h1 className='text-4xl font-bold text-center'>Why You Choose Us</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                    reasons.map(reason => <Reason
                    key={reason.id}
                    reason={reason}
                    ></Reason>)
                }
            </div>

            
        </div>
    );
};

export default WhyChooseUs;