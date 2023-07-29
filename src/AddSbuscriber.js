import React, { Component } from 'react';
import Header from "./Header";
import "./Common/Common.css";
import './AddSubsciber.css';

class AddSubscriber extends Component {
    render() {
        return(
            <diV className="parent-container">
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <button className='custom-btn'>Back</button>

                    <form className='subsciber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input type='text' id='name' className='input-control' name='name' /><br/><br/>
                        <label htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input type='text' id='phone' className='input-control' name='phone' />

                        <div className='subsriber-info-container'>
                            <span className='subsciber-to-add-heading'>Subsciber to be added: </span><br/>

                            <span className='subsciber-info'>Name:</span><br/>
                            <span className='subsciber-info'>Phone:</span><br/><br/>
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </diV>
        )
    }
}

export default AddSubscriber;