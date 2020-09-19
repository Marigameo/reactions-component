import React from 'react'

export default function Reactions(props) {
    const { matchingEmojis, openPanel, closePanel } = props;
    console.log(matchingEmojis);
    const emojis = matchingEmojis.map(emoji => <span key={emoji.id} onMouseOver={() => openPanel(emoji.id)} onMouseLeave={closePanel}>{emoji.emoji}</span>)
    return (
        <div>
            {emojis}
        </div>
    )
}
