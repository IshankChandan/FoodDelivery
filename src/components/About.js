import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("parent constructor");
               
    }

    componentDidMount(){
        // console.log("Parent component did mount")
        
    }
    render(){

      

        // console.log("parent render")
        return(
            <div>
                Logged In User: <UserContext.Consumer>{({loggedInUser}) => (<h4>{loggedInUser}</h4>)}</UserContext.Consumer>
                <h1 className="text-2xl font-semibold">About Me</h1>
                <UserClass name={"Ishank Chandan C"} location={"Delhi"}/>
                
            </div>
        )
    }
}


export default About;