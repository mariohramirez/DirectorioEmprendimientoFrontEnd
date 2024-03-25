import { ThemeProvider } from '@emotion/react';
import './App.css';
import { NavBar } from './component/NavBar/NavBar';
import { Footer } from './component/Footer/Footer';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import Directorio from './component/Directorio/Directorio';

function App() {
  return (
  <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      {/*<Home />*/}
      <Directorio />
      <Footer />
    </ThemeProvider>
  </div>
  );
}

export default App;
