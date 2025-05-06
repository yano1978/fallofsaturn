import '@/index.css';
import ReactDOM from 'react-dom/client';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import Home from '@/components/Home';

export default function App() {
  return (
    <>
      <Home />
      <Layout />
      <Modal />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
