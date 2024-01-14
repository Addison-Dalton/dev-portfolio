import '@fontsource/roboto';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Page from 'components/page';
import Routes from './routes';

function App() {
  return (
    <Page>
      <header>
        <Navbar />
      </header>
      <Routes />
      <Footer />
    </Page>
  );
}

export default App;
