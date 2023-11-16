import { createGlobalStyle } from "styled-components";

export const HeaderGlobalStyle = createGlobalStyle`
.lang-select {
  margin-right: 20px;
  position: relative;
  background-color: transparent;
}
.lang_opt {
    left: 0;
}
.drop_down {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: transparent;
    border-radius: 8px;
    transition: all 250ms ease;
    width: 93px;
    height: 40px;
    &:hover {
    background-color: #272525;    
}
&:focus,
&:active {
    background-color: white;
    color: black;
}
&:focus,
&:active {
    .down_icon {
        transform: rotate(180deg);
    }
}
.down_icon {
    transition: all 250ms ease;
}
}
.lang_icon {
    margin-right: 5px;
    fill: currentColor;
    background-color: transparent;
}

.register-select {
    position: relative;
    right: 0;
}
.register_box {
    position: absolute;
    right: 0;
}


.is-visible {
display: flex;
}
`;
