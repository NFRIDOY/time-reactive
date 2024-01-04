import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)
  const time = new Date()
  const timeRef = useRef(null);
  const [theTime, setTheTime] = useState([])

  console.log(typeof (time));
  console.log(time);

  useEffect(() => {
    // timeRef.current = setInterval(1000);
    setTheTime(timeRef.current)
    console.log(theTime);
  }, [theTime])
  return (
    <div>
      <section>
        {/* <h1 ref={timeRef}> */}
        {/* {time.getDate()} */}
        {/* {time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ':' + time.getMilliseconds()} */}
        {/* {time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()} */}
        {/* {theTime} */}
        {/* {time.toLocaleTimeString()} */}
        {/* </h1> */}
        <div className='mx-auto w-fit'>
          <Watch></Watch>
        </div>
      </section>
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
