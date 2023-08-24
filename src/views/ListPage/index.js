import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useCustomContext } from '../../reducer/customContext';
import { actionDeleteShoppingItem } from '../../reducer/reducerActions';

import Text from '../../components/Text';
import Icon from '../../components/Icon';

import shopType from '../../assets/type.png';
import count from '../../assets/count.png';
import deleteIcon from '../../assets/delete.png';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const CardContainer = styled('div')({
    display: 'flex',
    padding: '10px 0',
    flexWrap: 'wrap'
})

const Card = styled('div')({
    display: 'flex',
    height: 100,
    width: 200,
    margin: '0 17px 15px',
    padding: 10,
    borderRadius: 15,
    boxShadow: '0px 0px 3px 2px #ccc',
    flexDirection: 'column'
});

const CardHeader = styled('div')({
    display: 'flex',
    height: '40px',
    padding:'0 5px',
    alignItems: 'center',
    position: 'relative'
});

const CardInitial = styled('span')(({ bgColor }) => ({
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

const CardDelete = styled(Icon)({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    width: 25,
    cursor: 'pointer'
})

const CardDetail = styled('div')({
    display: 'flex',
    alignItems: 'center',
    margin: '0 13px',
    height: 30
});

const AddCard = styled(Link)({
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

const AddCardDetails = styled(Text)(({ size, lineheight }) => ({
    fontWeight: 700,
    fontFamily: 'cursive',
    fontSize: size,
    display: 'flex',
    margin: 0,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: lineheight
}))


const ListPage = () => {
    const {state, dispatch} = useCustomContext();

    const deleteCard = id => {
        const newVal = shoppingList.filter(val => {
            return val.id !== id;
        });

        dispatch(actionDeleteShoppingItem(newVal));
    }

    const { shoppingList, isLoaded } = state;
    return (
        <Container>
            <h1>List of Created Shoppings</h1>
            <CardContainer>
                {
                    isLoaded && shoppingList.map(val => (
                        <Card key={val.id}>
                            <CardHeader>
                                <CardInitial bgColor={`#${Math.floor(Math.random()*16777215).toString(16)}`}>{val.name.charAt(0).toUpperCase()}</CardInitial> {/* with randomize color BG */}
                                <Text size={18} fontFamily={'cursive'} color='#5e5e5e' margin='0 0 0 10px' fontWeight='700'>{val.name}</Text>
                                <CardDelete src={deleteIcon} onClick={() => deleteCard(val.id)} />
                            </CardHeader>
                            <CardDetail>
                                <Icon src={shopType} margin='0 10px 0 0'/>
                                <Text fontFamily={'cursive'}>{val.type}</Text>
                            </CardDetail>
                            <CardDetail>
                                <Icon src={count} margin='0 10px 0 0'/>
                                <Text fontFamily={'cursive'}>{val.itemCount}</Text>
                            </CardDetail>
                        </Card>
                    ))
                }
                <AddCard to="/createList">
                    <AddCardDetails size={48} lineheight='50px' className='cardDetails'>+</AddCardDetails>
                    <AddCardDetails size={14} className='cardDetails'>Add Shopping List</AddCardDetails>
                </AddCard>
            </CardContainer>
        </Container>
    );
}

export default ListPage;
