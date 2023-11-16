import { createGlobalStyle } from "styled-components";

export const NavStyles = createGlobalStyle`
.nav-bar {
    background-color: transparent;  
}
.nav-container {
    margin: 0;
    padding: 0;
    gap: 40px;
}
.logo {
    color: #6db751;
    &:hover {
        color: #6db751;
    }
}
.me-auto {
    gap: 20px;
}
.nav-item {
    position: relative;
    padding: 0 !important;
    color: white;
    transition: all 250ms ease;

    &::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -3px;
        left: 0;
        right: 0;
        background-color: #6db751;
        transform: scale(0);
        transition: all 250ms ease;
    }
    &:hover {
        &::after {
            transform: scale(1);
        }
    }
}
`;
