import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Bio from '@/pages/Bio';
import Music from '@/pages/Music';
import Pics from '@/pages/Pics';
import Merch from '@/pages/Merch';
import Contact from '@/pages/Contact';

const Home = () => {
  return (
    <>
      <Menu />
      <main className="z-10">
        <Bio />
        <Music />
        <Pics />
        <Merch />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
