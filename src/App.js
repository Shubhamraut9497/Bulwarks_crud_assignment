import './App.css';
import UserInfo from './components/UserInfo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserDetails from './components/UserDetails';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInfo/>}/>
        <Route path="/users" element={<UserDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
