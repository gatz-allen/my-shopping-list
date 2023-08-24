import React from 'react';

import { useCustomContext } from '../../reducer/customContext';
import { actionDeleteShoppingItem } from '../../reducer/reducerActions';

import Text from '../../components/Text';
import Icon from '../../components/Icon';
import {
    Container,
    CardContainer,
    Card,
    CardHeader,
    CardInitial,
    CardDelete,
    CardDetail,
    AddCard,
    AddCardDetails,
} from './styleComponents';

import shopType from '../../assets/type.png';
import count from '../../assets/count.png';
import deleteIcon from '../../assets/delete.png';


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
