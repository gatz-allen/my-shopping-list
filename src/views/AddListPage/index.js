import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useCustomContext } from '../../reducer/customContext';
import { actionAddShoppingList } from '../../reducer/reducerActions';

import Text from '../../components/Text';
import Icon from '../../components/Icon';
import {
    Container,
    FormContainer,
    FormElem,
    FlexContainer,
    FormInput,
    InputLabel,
    FormDropdown,
    ListHeader,
    RedSpan,
    FormButton
} from './styleComponents';

import dragIcon from '../../assets/dragIcon.png';
import deleteIcon from '../../assets/delete.png';
import plusIcon from '../../assets/plus.png';

// ADD LIST PAGE COMPONENT
const AddListPage = () => {
    const navigate = useNavigate(); // for navigating pages via router-dom
    const {state, dispatch} = useCustomContext(); // get the store reducer
    const [shoppingState, setShoppingState] = useState({ // initialize our state object to use on our shopping list items
        name: '',
        type: '',
        itemList: [
            {
                id: '0',
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
        let id = shoppingState.itemList.length.toString();
        setShoppingState({
            ...shoppingState,
            itemList: [
                ...shoppingState.itemList,
                {
                    id: id,
                    name: '',
                    count: 1
                }
            ]
        })
    }

    const handleRemoveItem = i => {
        let temp = {...shoppingState};
        temp.itemList.splice(i, 1);
        setShoppingState(temp);
    }

    const handleOnSubmit = e => {
        if(shoppingState.itemList.length < 1) { // cancel submission condition
            window.alert('Please add atleast 1 item')
            e.preventDefault();
            return false;
        }

        let newState = {...state};
        newState.shoppingList.push({
            ...shoppingState,
            id: state.shoppingList.length,
            itemCount: shoppingState.itemList.length
        })

        dispatch(actionAddShoppingList(newState)); // update the data to our reducer store
        window.alert('Shopping List Saved!');
        navigate('/') // then go back to main page
    }

    const setOptionsQuantity = () => { // render dropdown contents for quantity
        const rows = [];
        for(let i=0; i<12; i++) rows.push(<option value={i+1}>{i+1}</option>)
        return (
            <>
                <option disabled selected value='' hidden></option>
                {rows}
            </>
        )
    }

    const onDragEnd = event => { // Sort the data after drop event on dnd
        const {source, destination, type} = event;

        // prunings
        if(!destination) return;
        if(source.index === destination.index) return;

        // reordering logic and updating our state data
        const sourceIndex = source.index;
        const destinationIndex = destination.index;
        const reorderedList = shoppingState;
        const [itemToMove] = reorderedList.itemList.splice(sourceIndex, 1); // get the data on array that we will be moving
        reorderedList.itemList.splice(destinationIndex, 0, itemToMove); // store it again but this time on the target index
        setShoppingState(reorderedList); // then update our state
    }

    return (
        <Container>
            <h1>Create your Shopping List</h1>
            <FormContainer>
                <FormElem target="_blank" onSubmit={e => handleOnSubmit(e)}>
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

                    {/* React beatiful DnD library */}
                    <DragDropContext onDragEnd={onDragEnd}>
                        <FlexContainer>
                            <Droppable droppableId='ROOT'>{/* droppable element can be multiple. Note that Ids should be on string */}
                                {provided => (
                                    <FlexContainer isParent isColumn ref={provided.innerRef} {...provided.droppableProps}>
                                        {shoppingState.itemList && shoppingState.itemList.map((val, index) => (
                                            <Draggable draggableId={val.id} key={val.id} index={index}>
                                                {provided => (
                                                    <FlexContainer isParent {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                        <Icon src={dragIcon} isBtn/>
                                                        <FormInput isOnForm required type='text' name='name' value={val.name} onChange={e => handleFieldOnChange(e, index)}/>
                                                        <FormDropdown isOnForm required name='count' onChange={e => handleFieldOnChange(e, index)}>
                                                            {setOptionsQuantity()}
                                                        </FormDropdown>
                                                        <Icon isBtn width={40} height={28} src={deleteIcon} onClick={() => handleRemoveItem(index)}/>
                                                    </FlexContainer>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </FlexContainer>
                                )}
                            </Droppable>
                        </FlexContainer>
                    </DragDropContext>

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