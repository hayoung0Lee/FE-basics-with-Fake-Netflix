import React from 'react';
import { createContext } from 'react';

export interface ScrollType {
    scroll: number;
    setScroll?: React.Dispatch<React.SetStateAction<number>> | (() => void);
}

export const Store = createContext<ScrollType>({ scroll: 0, setScroll: () => console.log('scroll') });
