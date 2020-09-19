import React, { Component } from 'react'

//import style
import '../assets/post.css'
import LikeButton from './LikeButton'
import Summary from './Summary';

class PostContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    myCallback = (dataFromChild) => {
        //something
        console.log(dataFromChild);
        this.setState({
            contentReactions: dataFromChild
        })
    }
    updateContentReactions = (id) => {
        let newData = {
            id: 0,
            user_id: 4,
            "reaction_id": id,
            content_id: 1
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let updatedContent = this.state.contentReactions;
                updatedContent.push(data)
                this.setState({ contentReactions: updatedContent })
            });
    }
    render() {
        return (
            <div className="container">
                <div className="feed">
                    <Summary
                    />
                    <LikeButton updateContentReactions={this.updateContentReactions} />
                </div>
            </div>
        )
    }
}

export default PostContainer
