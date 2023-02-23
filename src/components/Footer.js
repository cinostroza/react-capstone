const Footer = (props) => {
    return (
    <footer>
        <img src={process.env.PUBLIC_URL + "/ll_big_logo.png"} atl="Little Lemon Logo"/>
        <ul>
            Dormant Navigation
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <ul>
            Contact
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        <ul>
            Social Media Links
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
    </footer>
    )
}

export default Footer