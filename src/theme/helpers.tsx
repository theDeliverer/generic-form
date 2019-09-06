import {modularScale} from 'polished'

export const scale = (size: number) => modularScale(size, '0.5rem', 1.618);

export const spacing = (size: number) => `${size}rem`