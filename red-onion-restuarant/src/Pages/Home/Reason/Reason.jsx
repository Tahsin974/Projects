
import PropTypes from 'prop-types';


const Reason = ({ reason }) => {
    const { name, description, img, icon } = reason;
    return (
        <div className="card bg-white  shadow-xl ">
            <figure >
                <img
                    src={img}
                    alt="Shoes"
                    
                     />
            </figure>
            <div className="card-body grid grid-cols-6">
                <div >
                    <img src={icon} alt="" />
                </div>
                <div className="col-span-5">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions  mt-3">
                    <details>
                        <summary>See More</summary>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sunt ab, aliquam praesentium alias a eveniet ullam ratione deserunt quas.</p>
                    </details>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;
Reason.propTypes ={
    reason:PropTypes.node,
}