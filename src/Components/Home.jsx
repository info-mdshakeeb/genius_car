import React, { useContext } from 'react';
import { authUser } from '../Context/UserContext';

const Home = () => {
    const { user } = useContext(authUser);
    console.log(user)
    return (
        <div>

        </div>
    );
};

export default Home;