
import PropTypes from 'prop-types';
const Trainer = (props) => {
    const {name,designation,img,company,phone} = props.trainer;
    return (
        <div className="card card-side bg-slate-100		 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Trainer" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><small>{company}</small></p>
                <p>Designation: {designation}</p>
                <p>Phone: {phone}</p>
                
            </div>
        </div>
    );
};
Trainer.propTypes ={
    trainer: PropTypes.node,
}

export default Trainer;