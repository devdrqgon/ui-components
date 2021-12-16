import styled from "styled-components";

export const WindowContainer = styled.div`
    /* background: pink; */
    display: flex;
	justify-content: center;
	align-items: flex-start;
    height: 100vh;
    width: 100vw;

`
//#FBFCFD




export const Card = styled.div`
    margin-top: 3%;
    width: 60%;
    display: flex;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    min-height: 80%;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(26, 26, 26, 0.1);
    padding-bottom: 30px;
`
export const LeftTop = styled.div`
    border-bottom: 2px solid rgba(26, 26, 26, 0.1);
    display:flex;
    justify-content: center;
	align-items: center;
	align-content: center;
`


export const LeftBottom = styled.div`
    display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-start;
	align-content: flex-start;
    padding-left: 30px;
    padding-right: 30px;

`

export const Title = styled.div`
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
`
export const FormContainer = styled.div`
    margin-right: 5vw;
    margin-left: 0.3vw;

`


export const SubTitle = styled.div`
    font-weight: bold;
    margin-top: 6px;
    font-size: 14px;

`
export const Right = styled.div`
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;

`


interface Props {
    _marginTop?: string,
    _marginRight?: string,

}
export const HContainer = styled.div<Props>`
    display: flex;
    justify-content: flex-start;
    max-width: 270px;
    margin-top: ${p => p._marginTop ? p._marginTop : '0px'};
    margin-right: ${p => p._marginRight ? p._marginRight : '0px'};
    /* border: 2px solid red; */
`
