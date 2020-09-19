import React, { Component } from 'react'

import '../assets/button.css'

import ReactionBand from './ReactionBand'

class LikeButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonName: 'Like',
            emoji: '👍',
            emoji_id: 1,
        }
        this.changeButton = this.changeButton.bind(this);
    }

    changeButton(name, emoji, emoji_id) {
        this.setState({
            buttonName: name,
            emoji: emoji,
            emoji_id: emoji_id,
        })
        this.props.updateContentReactions(emoji_id);
        document.querySelector('.reaction-box').style.display = 'none'
    }
    mouseOver = () => {
        document.querySelector('.reaction-box').style.display = 'block'
    }
    mouseLeave = () => {
        document.querySelector('.reaction-box').style.display = 'none'
    }
    render() {
        const { buttonName, emoji } = this.state;
        return (
            <div>
                <span className="like-btn" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}
                >
                    <span>{emoji}</span><span>{buttonName}</span>
                    <ReactionBand changeButton={this.changeButton} />
                </span>
            </div>
        )
    }
}

export default LikeButton
