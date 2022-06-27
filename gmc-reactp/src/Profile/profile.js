import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName,  title, bio, profession,  handleName, children }) =>  {

    Profile.defaultProps = {
        title: 'My Profile',
        fullName: 'Chuks Chito Favour',
        bio: 'I am a 500l student of fupre, studying Petroleum Engineering. I am sultry, crazy, smart, intelligent and beautiful. I am capable of accomplishing whatsover i want through Christ',
        profession: 'Software Engineer, Hair business owner and a student',
        children: `<img src='./propsimg.jpg' alt='assignment'/>`,
    }
    return (
        <div>
            title: {title},
            fullName: {fullName},
            bio:  {bio},
            profession: {profession},
            children: {children}
        </div>
    )
}

Profile.propTypes = {
    title: PropTypes.string,
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
}



export default Profile;