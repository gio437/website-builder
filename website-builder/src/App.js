import './App.css';
function App() {
  
const addElement = (elementTag) => {
  console.log(`${elementTag}`);
  const elements = document.querySelector('.elements');
  const newElement = document.createElement(`input`);
  newElement.innerHTML = 'Type here';
  newElement.classList.add(`${elementTag}Element`);
  elements.appendChild(newElement);
}

  return (
    <div className="App">
      <div className="Main">
        <div className='Element-Buttons'>
          {/* change button parameters to change generated elements */}
          <button className='title-btn' onClick={() => addElement('h1')}>Title</button>
          <button className='paragraph-btn' onClick={() => addElement('p')}>Paragraph</button>
        </div>
        <div className='elements'></div> 
      </div>      
    </div>
  );
}

export default App;
