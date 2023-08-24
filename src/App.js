import React, {useEffect, useReducer} from 'react';
import styled from '@emotion/styled';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import CustomContext from './reducer/customContext';
import reducer from './reducer';
import { actionGetShoppingList } from './reducer/reducerActions';

import ListPage from './views/ListPage';
import AddListPage from './views/AddListPage';

import Icon from './components/Icon';
import Text from './components/Text';

import shoppingIcon from './assets/shopping-icon.png';

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 100
});

const PageCard = styled('div')({
  border: '1px solid #ccc',
  borderRadius: '15px',
  width: 1280,
  padding: '0 20px'
})

const PageHeader = styled('div')({
  height: 80,
  display: 'flex',
  alignItems: 'center',
})

const initialStates = {
  listPage: {
    shoppingList: [],
    isLoaded: false
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const providerState = {
    state,
    dispatch
  }

  useEffect(() => { // fetch initial shopping list and store it on reducer
    dispatch(actionGetShoppingList());
  }, []);

  const enwrapComponent = component => (
    <CustomContext.Provider value={providerState}>
      <MainContainer>
        <PageCard>
          <PageHeader>
            <Icon src={shoppingIcon} width={50} height={50}/>
            <Text size={28} fontFamily={'cursive'} color='#5e5e5e' margin='0 0 0 15px'>My Shopping List</Text>
          </PageHeader>
          {component}
        </PageCard>
      </MainContainer>
    </CustomContext.Provider>
  )

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={enwrapComponent(<ListPage />)}/>
        <Route exact path='createList' element={enwrapComponent(<AddListPage />)}/>
      </Routes>
    </Router>
  );
}

export default App;
