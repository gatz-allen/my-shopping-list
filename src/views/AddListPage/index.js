import React, {useState} from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useCustomContext } from '../../reducer/customContext';
import { actionAddShoppingList } from '../../reducer/reducerActions';

import Text from '../../components/Text';
import Icon from '../../components/Icon';

import dragIcon from '../../assets/dragIcon.png';
import deleteIcon from '../../assets/delete.png';
import plusIcon from '../../assets/plus.png';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const FormContainer = styled('div')({
    display: 'flex',
    padding: 15,
    width: '1024px',
    margin: '0 auto'
});

const FormElem = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
})

const FlexContainer = styled('div')(({ isColumn, isParent, isBtn }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: isColumn ? 'column' : 'row',
    justifyContent: isParent ? 'space-between' : isBtn ? 'flex-end' : 'unset',
    width: isParent ? '100%' : 'unset'
}))

const FormInput = styled('input')(({ isOnForm }) => ({
    width: isOnForm ? '100%' : '500px',
    margin: isOnForm ? '4px 5px' : 0,
    height: 30,
    fontSize: 24
}));

const InputLabel = styled(Text)({
    fontSize: 18,
    fontWeight: '700'
});

const FormDropdown = styled('select')(({ isOnForm }) => ({
    width: isOnForm ? 400 : 300,
    margin: isOnForm ? '4px 5px' : 0,
    height: 35,
    fontSize: 24,
    textAlign: isOnForm ? 'center' : 'unset'
}));

const ListHeader = styled('div')({
    display: 'flex',
    height: 40,
    width: '100%',
    margin: '15px 0',
    justifyContent: 'space-around',
    boxShadow: '0px 2px 3px 4px #ccc'
})

const RedSpan = styled('span')({
    color: 'red'
})

const FormButton = styled('input')(({ isSave }) => ({
    fontSize: 18,
    fontWeight: 700,
    width: 90,
    height: 40,
    margin: '0 10px',
    cursor: 'pointer',
    boxShadow: '1px 1px 3px 3px #ccc',
    border: 'none',
    background: isSave ? '#b4e3ff' : ''
}));

// ADD LIST PAGE COMPONENT
const AddListPage = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useCustomContext();
    const [shoppingState, setShoppingState] = useState({
        name: '',
        type: '',
        itemList: [
            {
                name: '',
                count: 1
            }
        ]
    })

    const handleFieldOnChange = (e, index) => {
        let temp = {...shoppingState}
        temp.itemList[index][e.target.name] = e.target.value;
        setShoppingState(temp);
    }

    const handleAddItem = () => {
        setShoppingState({
            ...shoppingState,
            itemList: [
                ...shoppingState.itemList,
                {
                    name: '',
                    count: 1
                }
            ]
        })
    }

    const handleRemoveItem = i => {
        console.log(i)
        let temp = {...shoppingState};
        temp.itemList.splice(i, 1);

        setShoppingState(temp);
    }

    const handleOnSubmit = () => {
        let newState = {...state};
        newState.shoppingList.push({
            ...shoppingState,
            id: state.shoppingList.length,
            itemCount: shoppingState.itemList.length
        })

        dispatch(actionAddShoppingList(newState));
        window.alert('Shopping List Saved!');
        navigate('/')
    }

    const setOptionsQuantity = () => {
        const rows = [];
        for(let i=0; i<12; i++) {
            rows.push(<option value={i+1}>{i+1}</option>)
        }
        return <>{rows}</>
    }

    return (
        <Container>
            <h1>Create your Shopping List</h1>
            <FormContainer>
                <FormElem target="_blank" onSubmit={handleOnSubmit}>
                    <FlexContainer isParent>
                        <FlexContainer isColumn>
                            <InputLabel fontFamily={'cursive'}>Shopping List Name <RedSpan>*</RedSpan></InputLabel>
                            <FormInput type='tet' required value={shoppingState.name} onChange={e => setShoppingState({...shoppingState, name: e.target.value})}/>
                        </FlexContainer>
                        <FlexContainer isColumn>
                            <InputLabel>Category Type <RedSpan>*</RedSpan></InputLabel>
                            <FormDropdown name='type' required onChange={e => setShoppingState({...shoppingState, type: e.target.value})}>
                                <option disabled selected value='' hidden>--select type--</option>
                                <option value='Grocery'>Grocery</option>
                                <option value='Home Goods'>Home Goods</option>
                                <option value='Hardware'>Hardware</option>
                            </FormDropdown>
                        </FlexContainer>
                    </FlexContainer>

                    <ListHeader>
                        <Text size={24} fontWeight='700'>Item Name</Text>
                        <Text size={24} fontWeight='700'>Quantity</Text>
                    </ListHeader>
                    {shoppingState.itemList && shoppingState.itemList.map((val, index) => (
                        <FlexContainer isParent>
                                <Icon src={dragIcon} isBtn/>
                                <FormInput isOnForm required type='text' name='name' value={val.name} onChange={e => handleFieldOnChange(e, index)}/>
                                <FormDropdown isOnForm required name='count' onChange={e => handleFieldOnChange(e, index)}>
                                    {setOptionsQuantity()}
                                </FormDropdown>
                                <Icon width={40} height={28} src={deleteIcon} onClick={() => handleRemoveItem(index)}/>
                        </FlexContainer>
                    ))}

                    <Icon height={35} width={35} margin='10px auto' src={plusIcon} isBtn onClick={handleAddItem} />
                    <FlexContainer isBtn>
                        <FormButton isSave type='submit' value='SAVE' />
                        <FormButton type='button' value='CANCEL' onClick={() => navigate('/')} />
                    </FlexContainer>
                </FormElem>
            </FormContainer>
        </Container>
    )
}

export default AddListPage;