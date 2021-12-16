import styled from "styled-components";

interface Props {
    _padding: string
}
export const Padder = styled.div<Props>`
    padding-top: ${ p => p._padding};
    padding-bottom:${ p => p._padding};
`