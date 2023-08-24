// create a custom context that will be use as Provider to pass down the states reducers into child components
import React, {createContext, useContext} from 'react';

const CustomContext = createContext();

export function useCustomContext() {
    return useContext(CustomContext);
}

export default CustomContext;