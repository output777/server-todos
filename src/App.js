import './App.css';
import Detail from './components/Detail/Detail';
import Domains from './components/Domains/Domains';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Domains />
        <Detail />
      </Layout>
    </div>
  );
}

export default App;
