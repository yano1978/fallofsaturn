import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Bio from '@/sections/Bio';
import Music from '@/sections/Music';
import Gigs from '@/sections/Gigs';
import ImageCarousel from '@/sections/ImageCarousel';
import Contact from '@/sections/Contact';
import Pics from '@/sections/Pics';

const Home = () => {
  return (
    <>
      <Menu />
      <main className="z-10">
        <Bio />
        <Gigs />
        <Music />
        <Pics />
        <ImageCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
