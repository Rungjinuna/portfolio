import Footer from '../components/Footer';
import WebIdeApp from '../components/WebIdeApp';

export default function WebIdePage() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <WebIdeApp />
      </div>
      <Footer />
    </main>
  );
}
