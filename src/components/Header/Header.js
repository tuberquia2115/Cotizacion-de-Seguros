import React from 'react';
import PropTypes from 'prop-types';
import { TextoHeader, ComponentHeader } from './style'
const Header = ({ titulo }) => {
    return (
        <ComponentHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ComponentHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string
}

export default Header;