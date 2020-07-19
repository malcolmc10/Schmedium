import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return (
        <div>
            {props.articles && props.articles.map(article => (
                <div className='article "max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex"'>
                    <Link to={`/article/${article.id}`} >
                        <h5 className="font-serif leading-normal flex m-2">{article.article}</h5>
                        <img src={article.movie.img_url} alt="HarryPotter" className="h-64" />
                    </Link>
                    <Link to={`/article/${article.id}/edit`}><button >Edit</button></Link>
                    <button onClick={() => props.handleDelete(article.id)}>Delete</button>
                </div>
            ))}




        </div>

                

    )
}

