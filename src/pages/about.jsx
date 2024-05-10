import CookOne from "../imgs/Cook1.jpg";
import CookTwo from "../imgs/Cook2.jpg";
import CookThree from "../imgs/Cook3.jpg";

function About() {
    return (
        <div className="about-block">
            <h1>About Us</h1>
            <p><i><b>Welcome to Meals Band - your go-to restaurant for delicious meals!</b></i></p>
            <p>At Meals Band, we are passionate about serving fresh, high-quality food to our customers. Our chefs carefully select the finest ingredients to create mouthwatering dishes that satisfy any palate.</p>
            <p>Whether you're craving a hearty breakfast, a wholesome lunch, or a gourmet dinner, we have something for everyone. From classic comfort foods to innovative culinary creations, our menu is sure to impress.</p>
            <p>Customer satisfaction is our top priority, and we strive to provide exceptional service with every visit. Join us at Meals Band for a dining experience you won't forget!</p>
            <div className="cooks-block">
                <img src={CookOne} />
                <img src={CookTwo} />
                <img src={CookThree} />
            </div>
        </div>
    );
}

export { About };