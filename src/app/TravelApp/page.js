import Footer from '../components/Footer';
import TravelApp from '../components/TravelApp';

export default function WebIdePage() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <TravelApp />
      </div>
      <Footer />
    </main>
  );
}
