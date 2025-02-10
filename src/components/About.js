import UserClass from "./UserClass";
import React from "react";


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
                <UserClass />
            </div>
        );  
    }
}

export default About;