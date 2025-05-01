import '@/index.css';
import ReactDOM from 'react-dom/client';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
// import Pics from '@/pages/Pics';

export default function App() {
  return (
    <>
      <Home />
      <Layout />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
