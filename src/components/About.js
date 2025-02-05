import User from "./user";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About us page</h1>
            <h2>This is Namaste React web series</h2>
            <User name={"Abhishek(function)"}/>
            <UserClass name={"Abhishek(class)"}/>
        </div>
    );
};

export default About;