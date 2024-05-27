import { ThemeProvider } from '@emotion/react';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { DirectorioRoutes } from './component/Routes/DirectorioRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUser } from './component/State/Authentication/Action';

function App() {

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  const {auth} = useSelector(store => store);

  useEffect(() => {
    dispatch(retrieveUser(auth.jwt || jwt));
  }, [auth.jwt])

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DirectorioRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
