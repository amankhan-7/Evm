import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lotus, setLotus] = useState(0);
  const [hand, setHand] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [elephant, setElephant] = useState(0);
  
 function vote(flower){
  switch(flower){
    case 'lotus':
      setLotus(lotus+1);
      break;
    case 'hand':
        setHand(hand+1);
      break;
    case 'cycle':
        setCycle(cycle+1);
      break;
    case 'elephant':
        setElephant(elephant+1);
       break;
       default:
       break;
  }
 }

 useEffect(() => {
  if(hand !==0 || cycle !==0 || elephant !==0){
    setLotus(lotus+1);
    setHand(0)
    setCycle(0)
    setElephant(0)
  }
   
 }, [hand, cycle, elephant])
 console.log(cycle);
 


  return (
  <div className='evm'>
      <div>
        <h3 className='vote'>VOTE YOUR FAVOURITE PARTY 😊</h3>
      </div>
       <h2> EVM Total vote {lotus} </h2>


    <button className='btn'onClick={()=>vote('lotus')}>
    <img className='logo' src='https://www.drawing123.com/wp-content/uploads/2021/10/lotus-flower-drawing-step-4.png'></img>
    <h2>{lotus}</h2>
    </button>

  <br/>

    <button className='btn'onClick={()=>vote('hand')}>
    <img className='logo' src='https://c7.alamy.com/comp/2B8GMFB/stop-vector-icon-hand-symbol-or-hand-icon-isolated-on-white-background-2B8GMFB.jpg'></img>
    <h2>{hand}</h2>
    </button>
    <br/>
    

    <button className='btn'onClick={()=>vote('cycle')}>
    <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0e/Nepalese_election_symbol_cycle.jpg?20211120191041'></img>
    <h2>{cycle}</h2>
    </button>
    
    <br/>
   

    <button className='btn'onClick={()=>vote('elephant')}>
    <img className='logo' src='https://as2.ftcdn.net/v2/jpg/01/78/92/03/1000_F_178920316_ufQIR3NvBVZ6jsxn2hVo3AhmMpiQjT7U.jpg'></img>
    <h2 className='h'>{elephant}</h2>
     </button>
    
     
    
  </div>
  )
}

export default App
