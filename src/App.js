import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from './assets/peter_lentes_wfh.jpg';
class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };

    render() {
        return (
            <div>
                <h1>Hello.</h1>
                <img src={profile} alt="profile" className='profile'/>
                <p>Mi name is Pedro Rojas</p>
                <Title />
                <p>I'm always lookink forward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Puebla, City, and code every day</p>
                            <p>My favorite language is PHP, and I think Laravel es awesome</p>
                            <p>Beside coding, I also love music and reed books</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Show more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <SocialProfiles/>
            </div>
        );
    }
}

export default App;