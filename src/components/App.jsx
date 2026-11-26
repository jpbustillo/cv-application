import '../styles/App.css';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <main>
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  );
}

export default App;