import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { showListItems } from './redux/slicers/listSlice';

function App() {
  const list = useSelector(state => state.list.value)
  const dispatch = useDispatch()
  return (
    <>
      <div className='input-container'>
        <span>How many facts about StarWars do you want to be listed below? Input number in the box (up to 12 facts):</span>
        <input className='input' type="number" min={1} max={12} onChange={ (e) => dispatch(showListItems(e.target.value)) }/>
      </div>
      
      <div>
        {
          list.map((el, i) => {return <p key={i}>{el}</p>})
        }  
      </div>  
    </>
  )
}

export default App
