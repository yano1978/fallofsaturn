import '@/index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Bio from '@/pages/Bio';
import Pics from '@/pages/Pics';
import Music from '@/pages/Music';
import Merch from '@/pages/Merch';
import Contact from '@/pages/Contact';
import Footer from './components/Footer';
import ThreeJSAnimation from './plugins/ThreeJSAnimation';
import LogoIcon from './components/LogoIcon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bio" element={<Bio />} />
          <Route path="pics" element={<Pics />} />
          <Route path="music" element={<Music />} />
          <Route path="merch" element={<Merch />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
      <ThreeJSAnimation />
      <LogoIcon />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
