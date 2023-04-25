import './App.css';
import Nav from './components/Nav/Nav';
import PostsList from './components/PostsList/PostsList';
import Side from './components/Side/Side';


function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      <div className = "all">
          <PostsList/>
          <Side/>
      </div>
  </div>
  </div>
  );
}

export default App;
