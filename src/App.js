import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Home from './Pages/Home';
import Spinner from 'react-loader-spinner';

const Loading = () => <><Spinner
    type="Oval"
    color="#005696"
    height="100"
    width="100"
/></>;

const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
    state = {
        currentUser: null,
        loading: true
    }

    componentDidMount = () => {
        this.auth = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    currentUser: null,
                    loading: false
                })
            }
        })
    }

    render() {
        const { currentUser, loading } = this.state;
        if (loading) {
            return <><Loading /></>
        }
        return (
            <>
                {!currentUser &&
                    <>
                        <button onClick={() => {
                            firebase.auth().signInWithRedirect(provider);
                        }}>Log in via google</button>
                    </>
                }

                {currentUser &&
                    <Router>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                    </Router>
                }
            </>
        );
    }
}

export default App;
