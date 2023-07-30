import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Shilpa Bhat",
                    phone: "9999999999"
                },
                {
                    id: 2,
                    name: "Srishti Gupta",
                    phone: "8888888888"
                }
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    render() {
        return (
            <Router>
            <div>
                {/* Navigation links */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Show Subscribers</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Subscriber</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route
                        path="/"
                        element={<ShowSubscribers subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}
                    />
                    <Route
                        path="/add"
                        element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} history={this.props.history}/>}
                    />
                    </Routes>
                </div>
            </Router>
            
            // <Router>          
                // <div>
                //     <Routes>
                //         <Route exact path="/" render={(props) => (<ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />)} />
                //         <Route exact path="/add" render={({history}, props) => (<AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />)} />
                //         {/* <Route exact path="/add" render={(props) => (<AddSubscriber {...props} addSubscriberHandler={this.addSubscriberHandler} />)} /> */}

            //         </Routes>
            //     </div>
                
            // </Router> */}
        )
    }
}

export default PhoneDirectory;