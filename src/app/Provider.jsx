import { NavbarResponsive } from '@/components/Navbar'
import Footer from '@/components/Footer'
import DeferredChatBot from '@/components/DeferredChatBot'
import GlobalState from './context/GlobalState';
import { getFeaturedFaqs } from '@/lib/faq/repository';

export const Provider = ({ children }) => {
    const featuredFaqs = getFeaturedFaqs({ limit: 5 });

    return (
        <GlobalState>
            <div className='w-full'>
                <NavbarResponsive featuredFaqs={featuredFaqs} />
                {children}
                <DeferredChatBot />
                <Footer />
            </div>
        </GlobalState>
    )
}


