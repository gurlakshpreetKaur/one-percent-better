/**
 * Navbar for signed-in user to navigate through the site.
 * Server-side rendered.
 */
export default function NavBar() {
    return (<nav className="w-full py-3 px-6 fixed top-0 left-0 right-0 bg-black z-[500]">
        <ul>
            <li className="font-noto text-white font-semibold tracking-[1px]">1% Better</li>
        </ul>
    </nav>);
}