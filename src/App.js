import { ThemeProvider } from '@emotion/react';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { DirectorioRoutes } from './component/Routes/DirectorioRoutes';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/*<NavBar />*/}
        {/*<Home />*/}
        {/*<Directorio />*/}
        {/*<Noticias />*/}
        {/*<DetalleEmprendimiento />*/}
        {/*<DetalleNoticia />*/}
        {/*<Footer />*/}
        <DirectorioRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
