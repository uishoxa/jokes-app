import { Container } from '@mui/material';
import './app.css'
const Spinner = () => {
    return (
        <Container>
            <div className='App'>
                <div className="loader">
                        <div className="face">
                            <div className="circle"></div>
                        </div>
                        <div className="face">
                            <div className="circle"></div>
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Spinner;