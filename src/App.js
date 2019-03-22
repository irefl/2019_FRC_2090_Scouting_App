import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import LoadingSpinner from './Components/LoadingSpinner';
import BlueButton from './Components/BlueButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
    state = {
        currentUser: null,
        loading: true
    }

    // When the component mounts, connect to firebase and check if
    // user is logged in or not
    componentDidMount = () => {
        this.auth = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    currentUser: user,
                    loading: false
                });
                toast.success("Login successful", { autoClose: 3000 })
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

        // If still loading, show a spinner instead.
        if (loading) {
            return <LoadingSpinner />;
        }

        return (
            <div style={{
                marginLeft: '5%',
                marginRight: '5%',
                marginTop: '2%',
                marginBottom: '5%'
            }}>
                <ToastContainer />
                {/** If the user isn't logged in, show a button to log in via Google */}
                {!currentUser &&
                    <>
                        <div style={{
                            margin: 'auto',
                            color: "#20508b"
                        }}>
                            <h1>FRC 2090 Scouting App 2019</h1>
                            <h2>Built by William Kwok</h2>
                            <BlueButton style={{ marginTop: 10 }}
                                onClick={() => {
                                    firebase.auth().signInWithRedirect(provider);
                                }}
                            >Log in via google</BlueButton>
                        </div>
                    </>
                }

                {/** If the user is logged in, enable different routes. */}
                {currentUser && <Home currentUser={currentUser} />
                }
            </div>
        );
    }
}

export default App;
