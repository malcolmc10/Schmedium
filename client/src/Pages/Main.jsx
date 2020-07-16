import React from 'react'
import {Link} from 'react-router-dom'

export default function Main(props) {
    return (
        <div>
                {props.articles && props.articles.map(article => (
                    <div className='article'>
                        <Link to={`/article/${article.id}`} >
                            <h5 class="font-mono text-lg text-gray-800 text-center">{article.article}</h5>
                            <img src={article.movie.img_url} alt="HarryPotter" />
                        </Link>
                    </div>
                ))}
            </div>
            
        
    )
}

