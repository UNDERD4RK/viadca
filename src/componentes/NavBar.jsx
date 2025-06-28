export default function NavBar() {
  return (
    <div className="flex w-full justify-center">
      <nav className="w-[800px] bg-white shadow">
        <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
          <a href="/" className="text-2xl font-bold text-gray-800">
            LOGO
          </a>
          <ul className="flex space-x-8">
            {["Home", "Blog", "About Us", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
