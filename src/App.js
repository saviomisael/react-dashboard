import { CssBaseline, ThemeProvider } from '@mui/material';
import { Sidebar } from './scenes/global/Sidebar';
import { Topbar } from './scenes/global/Topbar';
// import { Bar } from './scenes/global/Bar';
// import { Form } from './scenes/global/Form';
// import { Line } from './scenes/global/Line';
// import { Pie } from './scenes/global/Pie';
// import { FAQ } from './scenes/global/FAQ';
// import { Geography } from './scenes/global/Geography';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './scenes/Contacts';
import { Dashboard } from './scenes/Dashboard';
import { Invoices } from './scenes/Invoices';
import { Team } from './scenes/Team';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, toggleColorMode] = useMode();
  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/form" element={Dashboard} /> */}
              {/* <Route path="/bar" element={Dashboard} /> */}
              {/* <Route path="/pie" element={Dashboard} /> */}
              {/* <Route path="/line" element={Dashboard} /> */}
              {/* <Route path="/faq" element={Dashboard} /> */}
              {/* <Route path="/geography" element={Dashboard} /> */}
              {/* <Route path="/calendar" element={Dashboard} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
