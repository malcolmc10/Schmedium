import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return (
        <div>
            {props.articles && props.articles.map(article => (
                <div className='article'>
                    <Link to={`/article/${article.id}`} >
                        <h5 className="font-sans text-base text-gray-800">{article.article}</h5>
                        <img src={article.movie.img_url} alt="HarryPotter" className="h-64" />
                    </Link>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            ))}




        </div>

                

    )
}

