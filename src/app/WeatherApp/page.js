import Footer from '../components/Footer';
import WeatherApp from '../components/WeatherApp';

export default function WeatherPage() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <WeatherApp />
      </div>
      <Footer />
    </main>
  );
}
