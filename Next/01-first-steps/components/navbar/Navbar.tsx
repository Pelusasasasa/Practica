
import { ActiveLink } from "../active-link/ActiveLink"


const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = async () => {
    return (
        <nav className="flex bg-blue-800/30  p-2 m-2 rounded">
            <ActiveLink text="Home" path="/"/>

            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <ActiveLink path={navItem.path} key={navItem.path} text={navItem.text} />
                ))
            }
        </nav>
    )
}
