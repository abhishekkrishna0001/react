import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About us page</h1>
                <h2>This is Namaste React web series</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>

                <UserClass />
            </div>
        );  
    }
}

export default About;