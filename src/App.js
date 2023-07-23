import Header from './components/Header';
import Footer from './components/Footer';
import BannerContent from './components/BannerContent';
import MainSection from './components/MainSection';
import BoostLink from './components/BoostLink';

function App() {
  return (
    <div className="cointainer w-full pt-10">
      <Header />
      <BannerContent />
      <MainSection />
      <BoostLink />
      <Footer />
    </div>
  );
}

export default App;
