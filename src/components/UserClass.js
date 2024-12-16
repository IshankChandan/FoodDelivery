import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo:
            {
                login: "dummy",
                location: "dummy", 
               
            }

        // console.log("constructor")
        }
    }

    async componentDidMount(){
        // console.log("Component Did mount")
        const fetchUser = await fetch("https://api.github.com/users/IshankChandan");
        const data = await fetchUser.json();
        console.log(data);
        this.setState(
            {
                userInfo:data
            });
    }

    render() {
        const{login, location, avatar_url} = this.state.userInfo;
        

        // console.log("Render")
        return( 
            <div className="py-5 flex">
                <img className="size-32 rounded-2xl" src={avatar_url}/>
                <div className="">
                <h2 className="text-base/7 font-semibold tracking-tight text-gray-900">{login}</h2>
                <h3 className="text-sm/6 font-semibold text-indigo-600">{location} </h3>
                <h3 className="text-sm/6 font-semibold text-indigo-500">@ishank9</h3>
                </div>
            </div>
        )
    }

}

export default UserClass;