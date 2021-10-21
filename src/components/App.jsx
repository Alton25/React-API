
import React, {useState, useEffect} from "react";



const App = () => {
    const [Films, setFilms] = useState([]);
    const [isFilm, setisFilm] = useState(false);
    const [isPeople, setisPeople] = useState(false);
    const [Peeps, setPeeps] = useState([]);
    useEffect(() =>{
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms))
    }, []);
    useEffect(() =>{
        fetch('https://ghibliapi.herokuapp.com/people/')
        .then(res => res.json())
        .then(allPeeps => setPeeps(allPeeps))
    }, []);

    const  handleClick = () => {
        setisFilm(true);
     
    }
    const handleBtnClick = () => {
        setisPeople(true);
    }
  
    return(
        <div>
<h1>Let's get ready to rumble!!!!</h1>

<button onClick={handleClick}>Load Films</button>
{isFilm && Films.map(Films => (
        <div className="col-md-6" key={`Films-card-${Films.id}`}>
            <div className="card shadow my-2">
                <div className="card-body">
                   <h4 className="card-title">{Films.title}</h4>
                   <p className="card-subtitle">{Films.original_title}</p>
                   <p className="className card-date">{Films.release_date}</p>
                   <p className="className card-text">{Films.description}</p>

                </div>
            </div>
        </div>
    ))}
        
        
    
    <button onClick={handleBtnClick}>Load People</button>
{isPeople && Peeps.map(Peeps => (
        <div className="col-md-6" key={`Peeps-card-${Peeps.id}`}>
            <div className="card shadow my-2">
                <div className="card-body">
                   <h4 className="card-title">{Peeps.name}</h4>
                   <p className="card-subtitle">{Peeps.age}</p>
                   <p className="className card-date">{Peeps.gender}</p>

                </div>
            </div>
        </div>
    ))}
        </div>
        
    )
}

export default App;