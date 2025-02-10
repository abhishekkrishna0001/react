import {Component} from "react";

class UserClass extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        };
        console.log("Child constructor");
    }

    async componentDidMount(){
        this.timer=setInterval(() => {
            console.log("Namaste React OP🚀");
        },1000);
        const data = await fetch("https://api.github.com/users/abhishekkrishna0001");
        const json = await data.json();
        this.setState({
            userInfo:json
        });
        console.log("Child component did mount");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Child component did update");
        if(this.state.count!==prevState.count)
            console.log("count updated");
    }

    componentWillUnmount(){
        console.log("Child component will unmount");
        clearInterval(this.timer);
    }

    render(){
        console.log("Child render");
        const {name,location,avatar_url} = this.state.userInfo;
        const {count}=this.state;
        return(
            <div className="user-card">
                <h2>Count: {count} </h2>
                <button onClick={() => {
                    this.setState({
                        count:count+1
                    });
                }}>Count Increase</button>
                <img src={avatar_url} ></img>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>contact: @thyabhi</h4>
            </div>  
        );
    }
}

export default UserClass;