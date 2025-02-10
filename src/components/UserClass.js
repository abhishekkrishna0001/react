import {Component} from "react";

class UserClass extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
            count2:1
        };
        console.log("Child constructor");
    }

    componentDidMount(){
        console.log("Child component did mount");
    }

    render(){
        console.log("Child render");
        const {name,location} = this.props;
        const {count,count2}=this.state;
        return(
            <div className="user-card">
                <h2>Count: {count} </h2>
                <button onClick={() => {
                    this.setState({
                        count:count+1
                    });
                }}>Count Increase</button>
                <h2>Count2: {count2} </h2>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>contact: @thyabhi</h4>
            </div>  
        );
    }
}

export default UserClass;