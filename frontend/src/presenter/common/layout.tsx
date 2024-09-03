import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <>
      <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={()=>{}} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={"M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden block}`}>
        <div className="px-4 pb-3 space-y-3">
          <a href="#home" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
          <a href="#services" className="block text-gray-600 hover:text-blue-600">Services</a>
          <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
        <Outlet/>
      </>
    );
  };