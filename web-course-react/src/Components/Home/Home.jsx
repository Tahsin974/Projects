import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';



const Home = () => {
    const navigate = useNavigate()
    const handleExploreBtn = () => {
        navigate('/courses')
    }

    return (
        <>
            <div className="hero bg-blue-800	 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-screen-lg min-w-screen-sm  space-y-14">
                        <h1 className="text-5xl text-white font-bold ">
                        <ReactTyped
                            strings={['Hello There!','Welcome to Web-Course']}
                            typeSpeed={90}
                            backSpeed={100}

                        /></h1>
                        <button onClick={handleExploreBtn} className="btn btn-wide bg-yellow-300 border border-blue-800 text-blue-800 hover:bg-yellow-400">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;