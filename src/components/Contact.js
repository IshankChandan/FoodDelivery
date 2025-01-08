const Contact = () => {
    return (
        <div className="text-center">
            <h1 className=" my-4 py-4 font-bold text-2xl">Contact Us</h1>

            <form className="mx-auto" >
                <input type="text" className="border border-stone-950 p-2 m-2" placeholder="name"/>
                <br/>
                <input type="text" className="border border-stone-950 p-2 m-2 w-64 h-60"  placeholder="message"/>
                <br/>
                <button className="bg-blue-400 text-white p-2 rounded-lg shadow-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;