import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:20PM"
            comment="Was here first!"
            avatar={faker.image.avatar()} 
            />
            <CommentDetail 
            author="Alex" 
            timeAgo="Today at 6:00AM"
            comment="Could be better tbh." avatar={faker.image.avatar()}
            />
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 3:10PM" comment="Fuck yeah bro!" avatar={faker.image.avatar()} 
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
