import React, { Component } from 'react';
import data from './data';

export default class Display extends Component {
    constructor () {
        super()
        this.state = {
            data: data,
            index: 0
        }
        this.incrementIndex = this.incrementIndex.bind(this);
        this.decrementIndex = this.decrementIndex.bind(this);
    }

    incrementIndex () {
        this.setState ( { index: this.state.index + 1 } )
    }

    decrementIndex () {
        this.setState ( { index: this.state.index - 1 } )
    }


    render () {
        const data = this.state.data[this.state.index];
        const sign = '<'

        return (
        <div className='main-container'>
            <div className='card'>
            <div className='id'>{data.id}/{this.state.data.length}</div>
            <div className='name'>{data.name.first} {data.name.last}</div>
                <div className='info'>
                    <div>From: {data.city}, {data.country}</div>
                    <div>Title: {data.title}</div>
                    <div>Employer: {data.employer}</div>

                </div>
            <div>Favorite Movies:</div>
                <div className='movie-list'>
                <div>{data.favoriteMovies[0]}</div>
                <div>{data.favoriteMovies[1]}</div>
                <div>{data.favoriteMovies[2]}</div>

                </div>

            </div>
            <div>
             <button onClick={this.decrementIndex}>{sign}Previous </button>
            <button onClick={this.incrementIndex}>Next ></button>

            </div>

        </div>

        );
    }
}