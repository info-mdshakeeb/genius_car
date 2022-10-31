import React, { createContext, useState } from 'react';

export const authUser = createContext();

const UserContext = ({ children }) => {
    const [user, setuser] = useState('shakeeb')

    const authInfo = { user }
    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default UserContext;