import React from 'react';



    const navLinks = [{
        title : "Home",
        href:"#"
    },
    {
        title : "About",
        href:"/about"
    },
    {
        title : "Service",
        href:"/service"
    },
    {
        title : "Contact",
        href:"/contact"
    }
    

]

const Navbar = () => {

  return (
    <div className='bg-black p-2 flex justify-between text-white'>
        <div className='flex justify-center items-center gap-2 mx-3'>
            <h1 className='text-2xl text-white'>Perfumy</h1>
        </div>
        <ul className='flex flex-row text-white gap-6 items-center mx-5'>
            {navLinks.map( (link , index) =>(
                <li key={index}>
                <a className='flex items-center gap-2 hover:text-blue-400' href={link.href}>{link.icon}{link.title}</a>
            </li>

            ))}
                       
        </ul>
      
    </div>
  )
}

export default Navbar;
