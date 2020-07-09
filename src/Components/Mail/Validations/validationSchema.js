import * as Yup from 'yup';

const validationSchema = Yup.object({
        email:Yup.string().trim().min(3).email().required('Email Required'),
        subject:Yup.string().trim().min(3).required('Required'),
        message:Yup.string().trim().min(10).required('Message cant be empty')
});

export default validationSchema;