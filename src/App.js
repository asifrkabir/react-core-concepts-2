import logo from './logo.svg';
import './App.css';

function App() {

  var styling = {
    color: 'tomato',
    backgroundColor: '#fff',
    padding: '10px'
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Person name="Rubel"></Person>
        <Person></Person>
        <h1 style={styling}>My Heading is {2 + 3}</h1>
        <p>My first React Paragraph</p>
      </header>
    </div>
  );
}

function Person(props) {

  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '20px'
  }

  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of the Year</h3>
    </div>
  )
}

export default App;
