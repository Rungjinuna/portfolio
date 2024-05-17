import ChattingApp from '../components/ChattingApp';
import Footer from '../components/Footer';

export default function WeatherPage2() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <ChattingApp />
      </div>
      <Footer />
    </main>
  );
}
