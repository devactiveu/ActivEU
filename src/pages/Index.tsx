import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyBest from '@/components/WhyBest';
import WhatWeDo from '@/components/WhatWeDo';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import YouthReach from '@/components/YouthReach';
import AboutUs from '@/components/AboutUs';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <div className="relative min-h-screen">

            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/Imagens/fundo.jpg')" }}
            />

            <div className="fixed inset-0 -z-10 bg-black/50" />

            <Header />
            <Hero />
            <Stats />
            <WhyBest />
            <WhatWeDo />
            <Process />
            <Projects />
            <Testimonials />
            <YouthReach />
            <AboutUs />
            <JoinUs />
            <Footer />

        </div>
    );
};

export default Index;