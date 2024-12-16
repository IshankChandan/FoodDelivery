const User = (props) => {
    const {name, location} = props;
    return( 
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>@ishank9</h3>
        </div>
    )
}

export default User;