import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Whatsapp = () => {
    return (
        <div>
            <div className='fixed bottom-12 zoom-on lef-0 md:right-0 lg:right-0 z-50'>

                <div className="relative w-full">
                    <Link href={"https://wa.link/z8mtfe"} target='_blank'>
                        <Image className='h-14 w-14' src={"/logos/whatsapp.png"} alt='Boton Whatsapp' width={1000} height={1000}></Image>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Whatsapp
