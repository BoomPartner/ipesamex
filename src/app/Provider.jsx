import { NavbarResponsive } from '@/components/Navbar'
import Footer from '@/components/Footer'
import DeferredChatBot from '@/components/DeferredChatBot'
import GlobalState from './context/GlobalState';

export const Provider = ({ children }) => {
    return (
        <GlobalState>
            <div className='w-full'>
                <NavbarResponsive />
                {children}
                <DeferredChatBot />
                <Footer />
            </div>
        </GlobalState>
    )
}


