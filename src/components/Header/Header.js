import React from 'react';
import { TextoHeader, ComponentHeader } from './style'
const Header = ({ titulo }) => {
    return (
        <ComponentHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ComponentHeader>
    );
}

export default Header;