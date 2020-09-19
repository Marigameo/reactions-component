import React from 'react'
import '../assets/panel.css'
export default function SummaryPanel(props) {
    const { dataToShow, emojiKey } = props
    console.log(emojiKey)
    const list = dataToShow.map(user => <li key={user.id}>{user.first_name} {user.last_name}</li>)
    return (
        <div className="panel">
            <div className="title">{emojiKey}</div>
            <div className="usersList">
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}
