import React, { Component } from 'react'

export default class UpdateArticle extends Component {
    state = {
        article: ''
    }

    componentDidMount() {
        if (this.props.articleData) {
            this.setFormData();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.articleData !== this.props.articleData) {
            this.setFormData();
        }
    }

    setFormData = () => {
        this.setState({
            name: this.props.articleData.article
        })
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            name: value
        })
    }

    render() {
        const { handleArticleUpdate, history, id } = this.props;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                handleArticleUpdate(id, this.state);
                history.push('/articles');
            }}>
                <h3>Update Review</h3>
                <label>
                    Blog:
          <input
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
} 

making a change