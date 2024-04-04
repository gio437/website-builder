import './App.css';
function App() {
  
const addElement = (elementTag, elementName) => {
  console.log(`${elementTag}`);
  const elements = document.querySelector('.elements');
  const newElement = document.createElement(`input`);
  newElement.innerHTML = 'Type here';
  newElement.classList.add(`${elementTag}Element`);
  newElement.setAttribute('title', `${elementTag}`);
  newElement.setAttribute('placeholder', `${elementName}`);
  elements.appendChild(newElement);
}

  return (
    <div className="App">
      <div className="Main">
        <div className='Element-Buttons'>
          {/* change button parameters to change generated elements */}
          <button className='header-btn' onClick={() => addElement('h1', 'Title')}>Title</button>
          <button className='paragraph-btn' onClick={() => addElement('p' , 'Body')}>Body</button>
          <button className='footer-btn' onClick={() => addElement('h2' , 'Footer')}>Footer</button>
        </div>
        <div className='elements'></div> 
      </div>      
    </div>
  );
}

export default App;
