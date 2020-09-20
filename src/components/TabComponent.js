import React, { Component } from 'react'
import '../assets/tabs.css'
import { Tabs, Tab } from 'react-bootstrap';

class TabComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { like, haha, wow, sad, angry, allreactions } = this.props;

        //there is a duplicate entity returned from the api - same user reacted for a content twice
        //thus to prevent key warning I've added a random number in addition to the id in key

        let usersLiked = like.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)
        let usersReactedHaha = haha.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)
        let usersReactedWow = wow.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)
        let usersReactedSad = sad.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)
        let usersReactedAngry = angry.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)
        let usersReactedOverall = allreactions.map(user => <li key={user.id + Math.random()}><div className="name-container"><img className="avatar" src={user.avatar} alt={user.first_name}></img>{user.first_name} {user.last_name}</div></li>)

        return (
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title={'All ' + usersReactedOverall.length}>
                    <ul className="userList">{usersReactedOverall}</ul>
                </Tab>
                <Tab eventKey="like" title={'👍 ' + usersLiked.length}>
                    <ul className="userList">{usersLiked}</ul>
                </Tab>
                <Tab eventKey="haha" title={'😂 ' + usersReactedHaha.length}>
                    <ul className="userList">{usersReactedHaha}</ul>
                </Tab>
                <Tab eventKey="wow" title={'😮 ' + usersReactedWow.length}>
                    <ul className="userList">{usersReactedWow}</ul>
                </Tab>
                <Tab eventKey="sad" title={'😥 ' + usersReactedSad.length}>
                    <ul className="userList">{usersReactedSad}</ul>
                </Tab>
                <Tab eventKey="angry" title={'😡 ' + usersReactedAngry.length}>
                    <ul className="userList">{usersReactedAngry}</ul>
                </Tab>
            </Tabs >
        )
    }
}

export default TabComponent
