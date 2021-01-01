import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <header>
            <h1 className="heading-alpha">
                Futbol <span style={{ color: "var(--green)" }}>5aside</span>
            </h1>
            <img src={logo} alt="5 a side logo" />
        </header>
    );
};

export default Header;
