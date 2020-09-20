import React, { Component } from 'react'

import '../assets/summary.css'

import SummaryModal from './SummaryModal'
import Reactions from './Reactions'
import SummaryPanel from './SummaryPanel';
class Summary extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { isOpen, dataLoaded, like, haha, wow, sad, angry, allreactions, matchingEmojis, openModal, closeModal, openPanel, closePanel, summaryPanelOpen, dataToShow, emojiKey } = this.props;
        if (dataLoaded) {
            return (
                <div>
                    <SummaryModal
                        like={like}
                        haha={haha}
                        wow={wow}
                        sad={sad}
                        angry={angry}
                        allreactions={allreactions}
                        show={isOpen}
                        onHide={() => closeModal(false)}
                    />
                    {summaryPanelOpen ? <SummaryPanel dataToShow={dataToShow} emojiKey={emojiKey} /> : null}
                    <div className="summaryReactions">
                        <Reactions matchingEmojis={matchingEmojis} openPanel={openPanel} closePanel={closePanel} />
                        <button className="content link-button" onClick={() => openModal(true)}>{allreactions.length}</button>
                    </div>
                </div>
            )
        } else {
            return <div className="summaryReactions loading">Loading...</div>
        }
    }
}

export default Summary