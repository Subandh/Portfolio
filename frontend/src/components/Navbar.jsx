import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
    <div className="flex justify-around py-4 text-sm font-semibold uppercase">
      {["Internships", "Projects", "Contact"].map(section => (
        <Link
          key={section}
          to={section.toLowerCase()}
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-blue-400 transition-colors"
        >
          {section}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;
