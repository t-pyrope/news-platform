import React from 'react';
import { useHistory } from 'react-router';

const Page404 = () => {
    const history = useHistory();

    return (
        <main>
            <div className='article'>
                <header className='article__header'>
                    <h2>Page not found</h2>
                </header>
                <div className='article__body'>
                    <button
                        className='button button_link'
                        onClick={() => history.goBack()}
                    >
                        Return
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Page404;
