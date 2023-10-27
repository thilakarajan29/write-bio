import Navbar from './navbar'
import Content from './content'
import BioBox from './biobox'
import BottomNav from './bottomnav';
import AboutYou from './about'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <BioBox />
      <AboutYou />
      <BottomNav />
    </div>
  );
}

export default App;
