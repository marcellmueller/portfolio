import './App.scss';
import './index';
import Nav from './Nav';
import Main from './Main';
import Title from './Title';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="center-div">
        {' '}
        <Title></Title>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
