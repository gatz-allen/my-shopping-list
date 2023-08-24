import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Icon from '../../components/Icon';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

export const CardContainer = styled('div')({
    display: 'flex',
    padding: '10px 0',
    flexWrap: 'wrap'
})

export const Card = styled('div')({
    display: 'flex',
    height: 100,
    width: 200,
    margin: '0 17px 15px',
    padding: 10,
    borderRadius: 15,
    boxShadow: '0px 0px 3px 2px #ccc',
    flexDirection: 'column'
});

export const CardHeader = styled('div')({
    display: 'flex',
    height: '40px',
    padding:'0 5px',
    alignItems: 'center',
    position: 'relative'
});

export const CardInitial = styled('span')(({ bgColor }) => ({
    display: 'flex',
    background: bgColor,
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Brush Script MT'
}))

export const CardDelete = styled(Icon)({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    width: 25,
    cursor: 'pointer'
})

export const CardDetail = styled('div')({
    display: 'flex',
    alignItems: 'center',
    margin: '0 13px',
    height: 30
});

export const AddCard = styled(Link)({
    display: 'flex',
    height: 100,
    width: 100,
    margin: '0 10px',
    padding: 10,
    borderRadius: 15,
    boxShadow: '0px 0px 3px 2px #ccc',
    flexDirection: 'column',
    cursor: 'pointer',
    textDecoration: 'none'
});

export const AddCardDetails = styled(Text)(({ size, lineheight }) => ({
    fontWeight: 700,
    fontFamily: 'cursive',
    fontSize: size,
    display: 'flex',
    margin: 0,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: lineheight
}))