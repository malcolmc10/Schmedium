
import React, { Component } from 'react'


export default class Create extends Component {
    state = {
        article: ''
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            article:value
        })
    }

    render() {
        const {handleArticleCreate, history} = this.props
        

        

        return (
            <div className="my-5 mx-auto max-w-xl">
                
            <form onSubmit={(e) => {
                e.preventDefault();
                handleArticleCreate(this.state);
                history.push('/articles')
            }}>
                <h1 className="text-3xl text-bold mb-5">Blogiosa Whatever You'd Like</h1>
                <div >
                    <h1 className="content-center text-xl m-8 ">The Magic Starts Here: </h1><br></br>
                    <textarea type='text'
                    value={this.state.article}
                    onChange={this.handleChange} className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" placeholder="Content" />

                </div>
                <br></br>
                <button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">It's Blogiosa not Blogiossaaa</button>
            </form>
            
            
            
            
            
            
            </div>
            
            
            
        )
    }
}
