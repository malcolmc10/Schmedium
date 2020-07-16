
import Header from './Shared/Header'
import Footer from './Shared/Footer'
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
            <form onSubmit={(e) => {
                e.preventDefault();
                handleArticleCreate(this.state);
                history.push('/articles')
            }}>
                <h1>Blogiosa Whatever You'd Like</h1>
                <label>
                    Article:
                    <input type='text'
                    value={this.state.article}
                    onChange={this.handleChange}/>
                    
                </label>
                <button>It's Blogiosa not Blogiossaaa</button>
            </form>
            
            
            
            
        )
    }
}
