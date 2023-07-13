import NavLink from "./NavLink";

export default function Navbar(props)
{
    return (
        <div className="navbar">
                <NavLink text="Home" />
                <NavLink text="Classes" />
                <NavLink text="Teachers" />
                <NavLink text="Rental & Repair" />
                <NavLink text="About" />
                <NavLink text="Contact" />
        </div>
    );
}