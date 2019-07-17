import { keyframes } from "styled-components";
export const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translate3d(-30px, -15px, 0);
    
} 

to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}`;
