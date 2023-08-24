import styled from '@emotion/styled';

const Text = styled('p')(({size, fontFamily, color, fontWeight, textAlign, margin}) => ({
    fontSize: size,
    fontFamily: fontFamily ? fontFamily : 'cursive',
    color,
    fontWeight,
    textAlign,
    margin: margin ? margin : 0
}));

export default Text;