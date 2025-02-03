import useFoodContext from '../../../Context/useFoodContext';
import './Header.css'
const Header = () => {
    const {handleForm} = useFoodContext()
    
    return (
        <div className="header  text-center min-h-screen min-w-screen flex items-center justify-center">
            <div className='min-w-screen '>
                <h1 className='lg:text-4xl font-bold text-center'>Best food waiting for your belly</h1>
                <form onSubmit={handleForm} className="join my-10 flex justify-center">
                    <input  type="text" name='search' className='join-item ps-6 bg-white  search-field' placeholder='Search Food' />
                    <input className='btn btn-error join-item text-white' type="submit" value="Search" />
                </form>
            </div>


        </div>
    );
};

export default Header;