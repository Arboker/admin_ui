import Router from './routes/Router'
import Header from './app/layout/Header'
import Sidebar from './app/layout/Sidebar'
import './assets/css/style.css'

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;