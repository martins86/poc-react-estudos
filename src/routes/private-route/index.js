import React from 'react';

import useAuth from './../../hooks/use-auth';

const PrivateRoute = ({ Item, SignIn }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <SignIn />;
};

export { PrivateRoute };