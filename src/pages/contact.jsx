import Phone from "../imgs/fi-rs-phone-call.svg";
import Timer from "../imgs/fi-rs-clock.svg";

import FirstRest from "../imgs/1.jpg";
import SecRest from "../imgs/2.jpg";
import ThirdRest from "../imgs/3.jpg";

function Contact() {
    return (
        <>
            <h1 className="h1-contact">Contacts</h1>
            <div className="contacts-cont">
                <div className="Contacts-block">
                    <img className="contact-image" src={FirstRest} />
                    <h4>Le Intrigue</h4>
                    <div>
                        <div className="info-block">
                            <img className="icon-1" src={Phone} />
                            <p>+7-912-34-86-75</p>
                        </div>
                        <div className="info-block">
                            <img className="icon-1" src={Timer} />
                            <p>MON-FRI: <br></br>9:00-21:00</p>
                            <p>SAT-SUN: <br></br>10:00-23:00</p>
                        </div>
                    </div>
                </div>
                <div className="Contacts-block">
                    <img className="contact-image" src={SecRest} />
                    <h4>Mr. Burger</h4>
                    <div>
                        <div className="info-block">
                            <img className="icon-1" src={Phone} />
                            <p>+7-912-34-86-75</p>
                        </div>
                        <div className="info-block">
                            <img className="icon-1" src={Timer} />
                            <p>MON-FRI: <br></br>9:00-21:00</p>
                            <p>SAT-SUN: <br></br>10:00-23:00</p>
                        </div>
                    </div>
                </div>
                <div className="Contacts-block">
                    <img className="contact-image" src={ThirdRest} />
                    <h4>Claude monet</h4>
                    <div>
                        <div className="info-block">
                            <img className="icon-1" src={Phone} />
                            <p>+7-912-34-86-75</p>
                        </div>
                        <div className="info-block">
                            <img className="icon-1" src={Timer} />
                            <p>MON-FRI: <br></br>9:00-21:00</p>
                            <p>SAT-SUN: <br></br>10:00-23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Contact };