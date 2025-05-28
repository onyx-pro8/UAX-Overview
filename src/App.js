import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './components/context/globalContext';
import { ThemeProvider } from './context/ThemeContext';

import { SideBar } from './components/layout/sidebar';
import { Header } from './components/layout/header';

import { Pages } from './pages';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Router>
          <SideBar />
          <div className='flex flex-col w-full'>
            <Header />
            <Pages />
          </div>
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
