import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => {
    console.log(msg);
    return <p className='errorMsg'>{msg}</p>;
};

ErrorMessage.propTypes = {
    msg: PropTypes.string.isRequired,
};

export default ErrorMessage;
