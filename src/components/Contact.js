const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact us Page</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="name"/>
                <input type="text" className="border border-black m-2 p-2" placeholder="message"/>
                <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg hover:cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default Contact;