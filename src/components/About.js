import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
                <h1 className="text-2xl font-semibold">About Me</h1>
                <UserClass name={"Ishank Chandan C"} location={"Delhi"}/>
            </div>
        )
    }
}


export default About;