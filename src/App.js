import './App.css';
import Services from './Components/Services/Services';
// import {Link} from 'react-router';
import WordPressHosting from './Components/Hosting/WordPressHosting';
import Hosting from './Components/Hosting/Hosting';
import WebsiteHosting from './Components/Hosting/WebsiteHosting';
import VpsHosting from './Components/Hosting/VpsHosting';



function App() {
  return (
   
    <div className="App">
  
      <h1>test1</h1><i class="fas fa-users"></i>
     <Services/>

     <WordPressHosting />
     <WebsiteHosting/>
     <VpsHosting/>
     {/* <Hosting/> */}
  
    </div>
  
  );
}

export default App;
