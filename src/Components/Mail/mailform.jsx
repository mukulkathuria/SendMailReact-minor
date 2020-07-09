import React from 'react';
import {Formik ,Form ,Field , ErrorMessage} from 'formik';
import { InputDiv , Labels , Successbtn ,DivContainer} from './Styles';
import intialValue from './Validations/initials';
import validationSchema from './Validations/validationSchema';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class MailForm extends React.Component {
    state ={
        form:null
    }
    onSubmit = values =>{
         axios.post('http://localhost:9000/mail',values)
         .then(res => {
             if(res.status === 200 ) this.setState({form:true});
         }).catch(err => console.log(err));
    }


    render(){
        if(this.state.form) return <Redirect to='/thankyou' />

        return(
            <Formik
                initialValues = {intialValue}
                onSubmit={this.onSubmit}
                validationSchema={validationSchema}
                >
                {formik =>(
                    <DivContainer>
                        <div className='form'>
                        <Form>
                            <Labels>Email</Labels>
                            <InputDiv> <Field type='email'  name='email' 
                            autoComplete='new-password' />
                            <ErrorMessage name='email' /> 
                            </InputDiv>

                            <Labels>Subject</Labels>
                            <InputDiv> <Field type='text'  name='subject' 
                            autoComplete='new-password' />
                            <ErrorMessage name='subject' /> 
                            </InputDiv>

                            <Labels>Message</Labels>
                            <InputDiv><Field as='textarea' name='message' />
                            <ErrorMessage name='message' />
                            
                            </InputDiv>
                            <Successbtn 
                            type='submit' 
                            disabled={!formik.isValid || formik.isSubmitting}>
                                {formik.isSubmitting ? 'Submitting' : 'Submit'}
                            </Successbtn>
                        </Form>
                        </div>
                    </DivContainer>
                )}
            </Formik>
        );
    }
}
export default MailForm;