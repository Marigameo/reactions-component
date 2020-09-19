import React, { Component } from 'react'

import '../assets/band.css'

class ReactionBand extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emojis: [],
        }
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/reactions')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    emojis: result,
                })
                console.log(this.state.emojis)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { emojis } = this.state;
        const emoji = emojis.map((emoji) => {
            return <div className="reaction-icon" key={emoji.id} onClick={(e) => this.props.changeButton(e, emoji.name, emoji.emoji, emoji.id)}>{emoji.emoji} <label>{emoji.name}</label></div>
        })
        return (
            <div className="reaction-box">
                <div className="reactions-wrapper">
                    {emoji}
                </div>
            </div>
        )
    }
}

export default ReactionBand
