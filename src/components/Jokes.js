import React, {Component} from 'react';

const ItemJoke = ({joke: {setup, punchline}}) => (
    <p style={{ margin: 10}}>
        {setup} <em>{punchline}</em>
    </p>
);

class Jokes extends Component {
    state = { joke: {},jokes: [] };

    toggleDisplayJokes = () => {
        this.setState({displayJokes: !this.state.displayJokes});
    };
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
    };

    render() {
        return (
            <div>

                <h2>Highlighted Joke</h2>
                <ItemJoke joke={this.state.joke}/>
                <hr/>
                <h3>Want ten new Jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => (<ItemJoke key={joke.id} joke={joke}/>))
                }
            </div>
        )
    }
}

export default Jokes;