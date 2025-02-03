
import FoodProvider from "../../../Provider/FoodProvider";
import Foods from "../Foods/Foods";
import Header from "../Header/Header";

import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <FoodProvider>
            <Header></Header>
            </FoodProvider>
            <Foods></Foods>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;