import React from 'react';
import UserTag, { Div } from './styles';

const UserTagWrapper = ({ divClassName, ...rest }) => (
    <Div className={divClassName}>
        <UserTag {...rest} />
    </Div>
);

export default UserTagWrapper;
