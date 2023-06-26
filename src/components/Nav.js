const Nav = (props) => {
    return (
    <nav>
        <ul className="flex-container" id="remove">
            <img src={process.env.PUBLIC_URL + "/Logo.svg"} alt="Little Lemon Logo"/>
            <li className="flex-item"><a href="#">Home</a></li>
            <li className="flex-item"><a href="#">About</a></li>
            <li className="flex-item"><a href="#">Menu</a></li>
            <li className="flex-item"><a href="#">Reservations</a></li>
            <li className="flex-item"><a href="#">Order Online</a></li>
            <li className="flex-item"><a href="#">Login</a></li>
        </ul>
    </nav>
    )
}

export default Nav