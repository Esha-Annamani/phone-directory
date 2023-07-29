import React, { Component } from 'react';
import Header from "./Header";
import "./Common/Common.css";
import './AddSubsciber.css';

class AddSubscriber extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    render() {
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <button className='custom-btn'>Back</button>

                    <form className='subsciber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input type='text' id='name' className='input-control' name='name' onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input type='text' id='phone' className='input-control' name='phone' onChange={this.inputChangedHandler}/>

                        <div className='subsriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subsciber to be added: </span><br/>

                                <span className='subsciber-info'>Name: {name}</span><br/>
                            <span className='subsciber-info'>Phone: {phone}</span><br/><br/>
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;