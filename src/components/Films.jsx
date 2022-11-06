import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './Films.css';

const Films = () => {
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
                                <p>{item.title}</p><br /> <p className="date">{item.release_date}</p><br />
                            </div>
                            <div className="description">
                                <p>{item.description}</p>
                            </div>
                            <div className="ImgFilms">
                                <a href={item.image}>Affiche du film</a>

                                <a href={item.movie_banner}>Image du film</a>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}




export default Films;