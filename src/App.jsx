import { useState, useEffect } from 'react'
import axios from 'axios'
import './assets/css/App.css'
import './assets/css/index.css'
import  './assets/css/LoadPage.css'
import Container from './components/Container'
import rymIcon from './assets/img/rymIcon.png'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({})
  const [typeId, setTypeId] = useState("")
  const random = Math.floor(Math.random() * 126) + 1

  useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${random}`)
          .then(res => {
              setIsLoading(false);
              setLocation(res.data)
          })
  }, [])

  const serchType = () => {
      if (typeId > 126) {
          alert("Only exist 126 Locations")
      } else {
          axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
              .then(res => setLocation(res.data))
      }

  }
 
  return (
    <div className="App">
     
      {
        isLoading ? <div className='container_load'>
        <div className='load'>
          <img src={rymIcon} alt="" />
        </div>
      </div> :
        <>        
         <Container typeId={typeId} setTypeId={setTypeId} serchType={serchType} location={location}/>
        </>
      }
    </div>
  )
}


export default App;
// ./assets/img/tittle.png