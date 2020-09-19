import React, { Component } from 'react'

//import style
import '../assets/post.css'
import LikeButton from './LikeButton'
import Summary from './Summary';

class PostContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            summaryPanelOpen: false,
            dataToShow: [],
            emojiKey: '',
            users: [],
            emojis: [],
            mathcingEmojis: [],
            contentReactions: [],
            uniqueReactions: [],
            like: [],
            haha: [],
            wow: [],
            sad: [],
            angry: [],
            allreactions: [],
            dataLoaded: false,
        }
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    getReactionIds = (data) => {
        return new Promise((resolve) => {
            let reactions = data.map(item => item.reaction_id)
            let uniqueReactions = reactions.filter((x, i, a) => a.indexOf(x) === i)
            this.setState({
                uniqueReactions: uniqueReactions
            })
            resolve(uniqueReactions)
        })
    }
    getUserData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/users')
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        users: result,
                    })
                    resolve(this.state.users)
                })
                .catch((error) => {
                    reject('User api call failed')
                })
        })
    }
    getContentReactions = () => {
        return new Promise((resolve, reject) => {
            fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions')
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        contentReactions: result,
                    })
                    resolve(this.state.contentReactions)
                })
                .catch((error) => {
                    reject('Get content reactions api call failed')
                })
        })
    }
    getAllReactedUsersData = () => {
        let ReactionData = this.state.contentReactions.filter(item => item.content_id === 1)
        console.log(ReactionData)
        let usersReacted = [];
        ReactionData.forEach(data => {
            usersReacted.push(this.state.users.find(user => user.id === data.user_id))
        });
        console.log(usersReacted)
        return usersReacted;
    }
    getEmojiData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/reactions')
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        emojis: data,
                    })
                    resolve(this.state.emojis)
                })
                .catch((error) => {
                    reject('Emojis api call failed')
                })
        })
    }
    emojisForUniqueReactions = (emojis) => {
        let emojisMatched = [];
        this.state.uniqueReactions.forEach(reaction => {
            emojisMatched.push(emojis.find(emoji => emoji.id === reaction))
        })
        console.log(emojisMatched);
        this.setState({
            matchingEmojis: emojisMatched
        })
        return true;
    }
    matchUserData = (id) => {
        let ReactionData = this.state.contentReactions.filter(item => item.reaction_id === id && item.content_id === 1)
        console.log(ReactionData)
        let usersReacted = [];
        ReactionData.forEach(data => {
            usersReacted.push(this.state.users.find(user => user.id === data.user_id))
        });
        console.log(usersReacted)
        return usersReacted;
    }
    filterUsers = (ids) => {
        if (ids.length > 0) {
            this.setState({
                allreactions: this.getAllReactedUsersData()
            })
        }
        ids.forEach(id => {
            switch (id) {
                case 1:
                    this.setState({
                        like: this.matchUserData(id)
                    })
                    break;
                case 2:
                    this.setState({
                        haha: this.matchUserData(id)
                    })
                    break;
                case 3:
                    this.setState({
                        wow: this.matchUserData(id)
                    })
                    break;
                case 4:
                    this.setState({
                        sad: this.matchUserData(id)
                    })
                    break;
                case 5:
                    this.setState({
                        angry: this.matchUserData(id)
                    })
                    break;
                default:
                    break;
            }
        });
        console.log(this.state);
    }
    init = () => {
        this.getUserData().then((users) => {
            console.log(users)
            return this.getContentReactions()
        })
            .catch((error) => {
                console.log(error)
            })
            .then((data) => {
                console.log(data)
                return this.getReactionIds(data)
            })
            .catch((error) => {
                console.log(error)
            })
            .then((reactions) => {
                let sortedReactionIds = reactions.sort(function (a, b) { return a - b })
                console.log(sortedReactionIds);
                this.filterUsers(sortedReactionIds)
                return this.getEmojiData()
            })
            .then((emojis) => {
                const status = this.emojisForUniqueReactions(emojis)
                console.log(status);
                if (status) {
                    this.setState({
                        dataLoaded: true,
                    })
                }
            })
    }
    openPanel = (key) => {
        switch (key) {
            case 1: this.setState({
                dataToShow: this.state.like,
                emojiKey: "Like",
            })
                break;
            case 2: this.setState({
                dataToShow: this.state.haha,
                emojiKey: "Haha",
            })
                break;
            case 3: this.setState({
                dataToShow: this.state.wow,
                emojiKey: "Wow",
            })
                break;
            case 4: this.setState({
                dataToShow: this.state.sad,
                emojiKey: "Sad",
            })
                break;
            case 5: this.setState({
                dataToShow: this.state.angry,
                emojiKey: "Angry",
            })
                break;
            default: break;
        }
        if (Array.isArray(this.state.dataToShow) && this.state.dataToShow.length) {
            this.setState({ summaryPanelOpen: true });
        }
    }
    closePanel = () => this.setState({ summaryPanelOpen: false });

    updateContentReactions = (reaction_id) => {
        console.log(this.state.likeButtonActive);
        let newData = {
            id: 31,
            user_id: 4,
            "reaction_id": reaction_id,
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
                console.log("enters")
                let userData = this.state.users.find(user => user.id === newData.user_id);
                let updatedUserData = this.state.allreactions;
                updatedUserData.push(userData)
                let updatedData = this.state.contentReactions;
                updatedData.push(newData);

                // let updatedCategoryData = this.state[]
                let emojiData = this.state.emojis.find(emoji => emoji.id === reaction_id);
                let emoji = emojiData.name.toLowerCase();
                let updatedReactionData = this.state[emoji];
                updatedReactionData.push(userData)
                let newState = {
                    contentReactions: updatedData,
                    allreactions: updatedUserData,
                }
                newState[emoji] = updatedReactionData
                this.setState(newState)
            });
    }
    componentDidMount() {
        this.init();
    }
    render() {
        const { isOpen, dataLoaded, like, haha, wow, sad, angry, allreactions, matchingEmojis, summaryPanelOpen, dataToShow, emojiKey } = this.state;
        return (
            <div className="container">
                <div className="feed">
                    <Summary
                        isOpen={isOpen}
                        dataLoaded={dataLoaded}
                        like={like}
                        haha={haha}
                        wow={wow}
                        sad={sad}
                        angry={angry}
                        allreactions={allreactions}
                        matchingEmojis={matchingEmojis}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        openPanel={this.openPanel}
                        closePanel={this.closePanel}
                        summaryPanelOpen={summaryPanelOpen}
                        dataToShow={dataToShow}
                        emojiKey={emojiKey}
                    />
                    <LikeButton updateContentReactions={this.updateContentReactions}
                    />
                </div>
            </div>
        )
    }
}

export default PostContainer
