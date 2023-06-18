import styled from "@emotion/styled";
import reactlogo from '../assets/logo/react-logo.svg'

const Menu = () => {

    return(
        <Container>
            <div>
                <h2>Tic Tac Toe</h2>
            </div>
            <div>
                <img src={reactlogo} alt="Logo de ReactJS" width={80} />
            </div>
            
        </Container>
    )

}


export default Menu;

const Container = styled.div`
    background-color : lightgrey;
    display : flex;
    align-items : center;
    justify-content : space-between;

    div{
        margin : 1em;
    }
`