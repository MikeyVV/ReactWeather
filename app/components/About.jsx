var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Welcome to About Page!</p>
            <p>you like weather?</p>
            <p>i don't know.<br/>
                but i do.<br/>
                This website is telling you the temperature everywhere you want.
                just type location in the search box or a box above the 'get weather' button<br/>
                have fun!
            </p>
        </div>
    )
};

module.exports = About;