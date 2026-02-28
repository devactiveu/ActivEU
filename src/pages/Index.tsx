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
    return (<div className="min-h-screen bg-background"><Header/> <Hero/> <Stats/> <WhyBest/> <WhatWeDo/> <Process/>
        <Projects/> <Testimonials/> <YouthReach/> <AboutUs/> <JoinUs/> <Footer/></div>);
};
export default Index;