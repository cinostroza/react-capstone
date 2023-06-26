const Footer = (props) => {
    return (
    <footer>
        <div className="flex-container">
        <img className="flex-item" src={process.env.PUBLIC_URL + "/ll_big_logo.png"} atl="Little Lemon Logo"/>
        <ul className="flex-item">
            Dormant Navigation
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <ul className="flex-item">
            Contact
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        <ul className="flex-item">
            Social Media Links
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        </div>
    </footer>
    )
}

export default Footer