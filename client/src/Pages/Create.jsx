
import React, { Component } from 'react'
import {createArticle, getMovies} from  '../Services/api-helper.js'


export default class Create extends Component {
    constructor(props) {
        super(props)
    this.state = {
        article: {},
        movies: []
    }
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            article:value
        })

        
    }

    render() {
        const {history} = this.props
        

        

        return (
            <div className="my-5 mx-auto max-w-xl shadow-md p-8">
                
            <form onSubmit={(e) => {
                e.preventDefault();
                createArticle(this.state);
                history.push('/articles')
            }}>
                <h1 className="text-3xl text-bold mb-5">Blogiosa Whatever You'd Like</h1>
                <div >
                    <h1 className="content-center text-xl m-8 ">It's Blogiosa not Blogiossaaa </h1><br></br>
                    <textarea type='text'
                    value={this.state.article}
                    onChange={this.handleChange} className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" placeholder="Content" />

                </div>
                <br></br>
                <button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            
            
            
            
            
            
            </div>
            
            
            
        )
    }
}
