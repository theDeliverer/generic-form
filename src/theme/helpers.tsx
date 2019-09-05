import {modularScale} from 'polished'

export const scale = (size: number) => modularScale(size, '1rem', 1.618);