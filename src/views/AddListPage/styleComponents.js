import styled from "@emotion/styled";

import Text from '../../components/Text';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

export const FormContainer = styled('div')({
    display: 'flex',
    padding: 15,
    width: '1024px',
    margin: '0 auto'
});

export const FormElem = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
})

export const FlexContainer = styled('div')(({ isColumn, isParent, isBtn }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: isColumn ? 'column' : 'row',
    justifyContent: isParent ? 'space-between' : isBtn ? 'flex-end' : 'unset',
    width: isParent ? '100%' : 'unset'
}))

export const FormInput = styled('input')(({ isOnForm }) => ({
    width: isOnForm ? '100%' : '500px',
    margin: isOnForm ? '4px 5px' : 0,
    height: 30,
    fontSize: 24
}));

export const InputLabel = styled(Text)({
    fontSize: 18,
    fontWeight: '700'
});

export const FormDropdown = styled('select')(({ isOnForm }) => ({
    width: isOnForm ? 400 : 300,
    margin: isOnForm ? '4px 5px' : 0,
    height: 35,
    fontSize: 24,
    textAlign: isOnForm ? 'center' : 'unset'
}));

export const ListHeader = styled('div')({
    display: 'flex',
    height: 40,
    width: '100%',
    margin: '15px 0',
    justifyContent: 'space-around',
    boxShadow: '0px 2px 3px 4px #ccc'
})

export const RedSpan = styled('span')({
    color: 'red'
})

export const FormButton = styled('input')(({ isSave }) => ({
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