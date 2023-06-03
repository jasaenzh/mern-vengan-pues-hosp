import { useState } from 'react';
import Logo from '../../../public/iconoVenganPues.png';
import Button from '../Button';
import { IonIcon } from '@ionic/react';
// Iconos, este es de una casa homeOutline
import { menu, close } from 'ionicons/icons';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const Links = [
        { name: "Inicio", link: "/" },
        { name: "Apartamentos", link: "/" },
        { name: "Reservas", link: "/" },
        { name: "Contactanos", link: "/" },
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className=' bg-white shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 gap-4'>
                    <span className=' text-3xl text-indigo-600'>
                        {/* <IonIcon icon={homeOutline} /> */}
                        <img src={Logo} alt="logo img" className=' rounded-full h-20 w-20' />
                    </span>
                    Vengan Pues Hospedajes...
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <IonIcon icon={open ? `${close}` : `${menu}`} />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <Link to="/login">
                        <Button>
                            Iniciar sesion
                        </Button>
                    </Link>
                </ul>

            </div>
        </div>
    )
}
export default Navbar



// <nav id='header' className='fixed w-full z-30 top-0 text-white bg-slate-600'>
//     <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
//         <div className="pl-4 flex items-center">
//             <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
//                 <div className='flex gap-4'>
//                     <img src={Logo} alt="logo img" className='w-12 h-12 lg:w-16 lg:h-16 ' />
//                     <span className='text-3xl flex items-center justify-center'>Vengan Pues</span>
//                 </div>
//             </a>
//         </div>

//         {/* Boton Menu en dispositivos pequeños */}
//         <div className="block lg:hidden pr-4">
//             <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
//                 Menu
//             </button>
//         </div>


//         <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
//             <ul className="list-reset lg:flex justify-end flex-1 items-center">
//                 <li className="mr-3">
//                     <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Apartamentos</a>
//                 </li>
//             </ul>
//         </div>

//     </div>
// </nav>