import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [endPoint,setEndPoints]= useState('')

  const [container,setContainer] = useState([])

  useEffect(() => {
    fetchMe()
  },[endPoint])

const fetchMe = () => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '77d5502959mshdabef4562ab275dp10c63ajsn96236b1a23b3',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    }
  };
  fetch(`https://superhero-search.p.rapidapi.com/api/?hero=+${endPoint}`, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setContainer(data.properties)
    })
    .catch(err => console.error(err));
}

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault()
  }

    return (
    <div className="App">

      <form onSubmit={submitHandler}>

        <input type={"text"} value={endPoint} onChange={onChangeHandler}/>
        <button type='submit'>submit</button>

      </form>

      {container.map((item) => {
        return(
          <div>
            <img src={item.images.properties.lg}/>
            <p>{item.name}</p>
          </div>
        )
      })}

    </div>
  );
}

export default App;
