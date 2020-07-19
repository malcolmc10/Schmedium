import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return (
        <div>
            {props.articles && props.articles.map(article => (
                <div className="article max-w-lg shadow-lg rounded overflow-hidden m-4">
                    <Link to={`/article/${article.id}`} >
                        <p className="mb-4 text-grey-dark text-sm">{article.article}</p>
                        <img src={article.movie.img_url} alt="HarryPotter" className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" />
                    </Link>
                    <Link to={`/article/${article.id}/edit`}><button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline m-4">Edit</button></Link>
                    <button onClick={() => props.handleDelete(article.id)} className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline m-4">Delete</button>
                </div>
            ))}




        </div>

                

    )
}

