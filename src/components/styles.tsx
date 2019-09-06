import {atlasN50, atlasDN20, atlasN400} from "../theme/colors";
import {fontFamily, fontSize} from "./Text/index";

export const controlElementBaseStyle = `
    ${fontFamily}
    ${fontSize(1)}
    color: ${atlasDN20};
    box-sizing: border-box;
    border-radius: .25rem;
    padding: 0.5rem .75rem;
    overflow: hidden;
    border: 1px solid ${atlasN50};
        transition: all 0.4s;    
    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    
    &:hover {
        border-color: ${atlasN400};
    }
`

export const inputBaseStyle = `
    ${controlElementBaseStyle}
    line-height: 1rem;
    position: relative;
    width: 100%;
    background: white;   
`
