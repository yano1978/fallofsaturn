import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Bio from '@/sections/Bio';
import Music from '@/sections/Music';
import ImageCarousel from '@/sections/ImageCarousel';
import Merch from '@/sections/Merch';
import Contact from '@/sections/Contact';

const Home = () => {
  return (
    <>
      <Menu />
      <main className="z-10">
        <Bio />
        <Music />
        {/* <ImageCarousel /> */}
        <Merch />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
