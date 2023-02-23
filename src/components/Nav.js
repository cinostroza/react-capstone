const Nav = (props) => {
    return (
    <nav>
        <ul>
            <img src={process.env.PUBLIC_URL + "/Logo.svg"} alt="Little Lemon Logo"/>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
    )
}

export default Nav