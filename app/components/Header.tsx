
export default function Header() {
    return (
      <header className="bg-foreground text-background w-full fixed p-4 top-0 left-0 shadow-lg">
        <nav className="flex justify-between items-center">
        <div className="w-16 h-16 bg-gradient-to-r from-[#d4a5d9] via-[#a2c2e1] to-[#f9d1b2] flex items-center justify-center text-2xl font-extrabold text-white shadow-lg rounded-3xl">
          <span className="text-2xl text-[#5f4b8b]">MP</span>
        </div>

          <ul className="flex gap-8 text-lg ">
            <li>
              <a href="#about" className="font-semibold hover:text-gray-300 bg-primary text-background px-4 py-2 rounded hover:bg-primary-dark transition duration-300">About</a>
            </li>
            <li>      
              <a href="#projects" className="font-semibold hover:text-gray-300 bg-primary text-background px-4 py-2 rounded hover:bg-primary-dark transition duration-300">Education</a>            
            </li>
            <li>      
              <a href="#projects" className="font-semibold hover:text-gray-300 bg-primary text-background px-4 py-2 rounded hover:bg-primary-dark transition duration-300">Work</a>     
            </li>
            <li>
              <a href="#projects" className="font-semibold hover:text-gray-300 bg-primary text-background px-4 py-2 rounded hover:bg-primary-dark transition duration-300">Projects</a>           
            </li>
            <li>
            <a href="#contact" className="font-semibold hover:text-gray-300 bg-primary text-background px-4 py-2 rounded hover:bg-primary-dark transition duration-300">Get in touch</a>       
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  