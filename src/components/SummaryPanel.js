import React from 'react'
import '../assets/panel.css'
export default function SummaryPanel(props) {
    const { dataToShow, emojiKey } = props
    const list = dataToShow.map(user => <li key={user.id}>{user.first_name} {user.last_name}</li>)
    return (
        <div className="panel">
            <div className="panelTitle">{emojiKey}</div>
            <div>
                <ul className="usersList">
                    {list}
                </ul>
            </div>
        </div>
    )
}
