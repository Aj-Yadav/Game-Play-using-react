import styled from 'styled-components';
import { Button } from '../Button';

const StartGame = ({toggle}) => {
    return (
        <Container> 
            <div>
            <img src="/images/dices.png" alt="dices" />

            </div>
            <div className='content' > 
                <h1> Dices Game</h1>
                <Button onClick={toggle}> Play Now</Button>
            </div>
        </Container>
    )
}
export default StartGame;

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content {
        h1 {
             font-size: 96px;
             white-space: nowrap;
        }
    }


`

