import { AppProvider } from './contexts/AppContext';
import { Home } from "./components/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
