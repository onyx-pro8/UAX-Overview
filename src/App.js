import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './components/context/globalContext';

import { SideBar } from './components/layout/sidebar';
import { Header } from './components/layout/header';

import { Pages } from './pages';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <SideBar />
        <div className='flex flex-col w-full'>
          <Header />
          <Pages />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
