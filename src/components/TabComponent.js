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
        let usersLiked = like.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        let usersReactedHaha = haha.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        let usersReactedWow = wow.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        let usersReactedSad = sad.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        let usersReactedAngry = angry.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        let usersReactedOverall = allreactions.map(user => <li key={user.id + Math.random()}>{user.first_name} {user.last_name}</li>)
        return (
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title={'All ' + usersReactedOverall.length}>
                    <ul>{usersReactedOverall}</ul>
                </Tab>
                <Tab eventKey="like" title={'👍 ' + usersLiked.length}>
                    <ul>{usersLiked}</ul>
                </Tab>
                <Tab eventKey="haha" title={'😂 ' + usersReactedHaha.length}>
                    <ul>{usersReactedHaha}</ul>
                </Tab>
                <Tab eventKey="wow" title={'😮 ' + usersReactedWow.length}>
                    <ul>{usersReactedWow}</ul>
                </Tab>
                <Tab eventKey="sad" title={'😥 ' + usersReactedSad.length}>
                    <ul>{usersReactedSad}</ul>
                </Tab>
                <Tab eventKey="angry" title={'😡 ' + usersReactedAngry.length}>
                    <ul>{usersReactedAngry}</ul>
                </Tab>
            </Tabs >
        )
    }
}

export default TabComponent
