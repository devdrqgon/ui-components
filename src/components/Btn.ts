import styled from "styled-components";

const Btn = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: 22px;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 40px;
    cursor: pointer;
`


export const BlueBtn = styled(Btn)`
    color: var(--primary-text-color, #ffffff);
    font-weight: bold;
    background-color: var(--primary-color, #3953A0);
    border-color: var(--primary-color, #3953A0);
`

export const SecondaryBtn = styled(Btn)`
    background-color: var(--primary-color, #3953A0);
    border-color: var(--primary-color, #3953A0);
    background: #ffffff;
    &:hover{
        background-color: var(--primary-color-level3, rgba(0, 105, 255, 0.15));
    }
`
export default Btn