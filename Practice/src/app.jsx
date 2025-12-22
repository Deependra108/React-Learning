import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import ChildComponent  from './ChildComponent'

export function App() {
  const [count, setCount] = useState(0);
  return(<>
       <h2>counter value: </h2>
      <Display value={count} />
  </>
  );
}

function Display({ value }) {
  return <h2>{value}</h2>;
}

