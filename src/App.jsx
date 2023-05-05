import './App.sass';
import AppRouter from './components/AppRouter';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <div className="container main">
        <Navigation />
        <div className="content">
          <AppRouter/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
