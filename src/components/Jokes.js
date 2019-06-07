import React, {Component} from 'react';

const ItemJoke = props => {

    console.log('props joke', props);
    const { setup, punchline} = props.joke;

    return (
        <p>
            {setup} <em>{punchline}</em>
        </p>
    )
};

class Jokes extends Component {
    state = {joke: {}, displayJokes: false};

    toggleDisplayJokes = () => {
        this.setState({displayJokes: !this.state.displayJokes});
    };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then(response => response.json())
            .then(json => this.setState({jokes: json}))
    }

    render() {
        // const { setup, punchline} = this.state.joke;

        const JOKES = this.state.jokes;

        return (
            <div>
                {
                    this.state.displayJokes ? (
                        <div>
                            {
                                JOKES.map(JOKE => (
                                    <ItemJoke key={JOKE.id} joke={JOKE}/>
                                ))
                            }
                            <button onClick={this.toggleDisplayJokes}>Hide jokes</button>
                        </div>
                    ) : (
                        <button onClick={this.toggleDisplayJokes}>Show 10 jokes</button>
                    )

                }
            </div>
        )
    }
}

export default Jokes;