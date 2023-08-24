import React from 'react';
import styled from '@emotion/styled';

const Icon = styled('img')(({ width, height, margin, isBtn}) => ({
    width: width ? width : 20,
    height: height ? height : 20,
    margin: margin ? margin : 0,
    cursor: isBtn ? 'pointer' : 'default'
}));

export default Icon;