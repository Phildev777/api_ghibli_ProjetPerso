import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './Avenir.css';
const Avenir = () => {
    const [data, setData] = useState([]);

    // similaire à "ComponentDidMount" et "componentDidUpdate";

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://ghibliapi.herokuapp.com/films/',
            );
            setData(result.data);

        };
        fetchData();

    }, [])

    return (
        <Fragment>
            <div className="fondImg">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <div className="titre">
                                <p>{item.title}, {item.original_title}, {item.original_title_romanised}</p><br /> <p className="date">Année de sortie : {item.release_date}, Durée : {item.running_time} min</p><br />
                            </div>
                            <div className="AutresInfos">
                                <p>director : {item.director}, producer : {item.producer} </p>
                            </div>
                            <div className="ImgFilms">
                                <img src={item.image} alt="affiche"></img>
                            </div>
                            <div className="InfosDiverses">
                                <a href={item.people} className="InfosD">characters</a>
                                <a href={item.species} className="InfosD">species</a>
                                <a href={item.locations} className="InfosD">locations</a>
                                <a href={item.vehicles} className="InfosD">vehicules</a>

                            </div>

                        </li>
                    ))}
                </ul>
            </div>






        </Fragment >

    )
}



export default Avenir;