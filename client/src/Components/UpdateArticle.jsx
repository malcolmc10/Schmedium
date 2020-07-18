import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    state = {
        article: ''
    }

    componentDidMount() {
        if (this.props.article) {
            this.setFormData();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.article !== this.props.article) {
            this.setFormData();
        }
    }

    setFormData = () => {
        this.setState({
            article: this.props.article
        })
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState(prevState => ({
            article:{...prevState.article, article:value}
        }))
    }

    render() {
        const { handleUpdate, history, id } = this.props;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(this.state.article.id, this.state.article);
                history.push('/');
            }} className="my-5 mx-auto max-w-xl shadow-md p-8">
                <h3 className="text-3xl text-bold mb-5">Update Review</h3>
                <label className="content-center text-xl m-8 ">
                    Blog:
          <input
                        type='text'
                        value={this.state.article.article}
                        onChange={this.handleChange}
                        className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" placeholder="Make Your Edits Here!"/>
                </label>
                <button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        )
    }
} 

