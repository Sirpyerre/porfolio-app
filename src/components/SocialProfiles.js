import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const {link, image} = props.socialProfile;

    return (
        <span>
                <a href={link}>
                    <img src={image} alt="profile" style={{width: 35, height: 35, margin: 10}}/>
                </a>
        </span>
    )
};

const SocialProfiles = () => {

    return (
        <div>
            <h2>Conect with me!</h2>
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIALPROFILE => (
                        <SocialProfile key={SOCIALPROFILE.id} socialProfile={SOCIALPROFILE}/>
                    ))
                }
            </div>
        </div>
    )
};

export default SocialProfiles;