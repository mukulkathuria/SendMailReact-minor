import React from 'react';
import {Link} from 'react-router-dom';
import { DivContainer,StyleDiv,Headings } from './Styles';

const Confirmation = () =>{
    return(
        <DivContainer>
            <StyleDiv>
                <Headings>
                    <h2>Your Message has been Sent</h2>
                </Headings>
                <Link to='/'><button>Go Back</button></Link>
            </StyleDiv>
        </DivContainer>
    );
}
export default Confirmation;