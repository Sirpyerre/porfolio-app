import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link, image} = this.props.socialProfile;

        return (
            <span>
                <a href={link}>
                    <img src={image} alt="profile" style={{ width:35, height:35, margin:10}}/>
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Conect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIALPROFILE => {
                            return (
                                <SocialProfile key={SOCIALPROFILE.id} socialProfile={SOCIALPROFILE}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;