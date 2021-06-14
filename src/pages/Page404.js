import React from 'react';
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <main>
            <h2>Page not found</h2>
            <Link to='/'>Go to homepage</Link>
        </main>
    );
};

export default Page404;
