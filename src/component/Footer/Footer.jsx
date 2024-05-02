import React from "react";

export const Footer = () => {
    return (
        <footer className='mx-auto font-medium text-md bg-[#026937]'>
            <div className="py-8 px-8 text-prelude flex items-center justify-between">
                <h3>Desarrollado por Mario Ramirez y Felipe Correa</h3>
                <span>{new Date().getFullYear()}&copy; Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default Footer;