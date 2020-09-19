import React, { Component } from 'react'

import '../assets/button.css'

import ReactionBand from './ReactionBand'

class LikeButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    mouseOver = () => {
        document.querySelector('.reaction-box').style.display = 'block'
    }
    mouseLeave = () => {
        document.querySelector('.reaction-box').style.display = 'none'
    }
    render() {
        const { buttonName, emoji, emoji_id, changeButton, updateContentReactions } = this.props;
        return (
            <div>
                <span className="like-btn" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}
                    onClick={(e) => updateContentReactions(e, emoji_id, 'button')}
                >
                    <span className="emoji">{emoji}</span><span className="emoji-name">{buttonName}</span>
                    <ReactionBand changeButton={changeButton} />
                </span>
            </div>
        )
    }
}

export default LikeButton
