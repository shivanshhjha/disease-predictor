import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLable,
    FormInput,
    FormButton,
    Text
} from './SignInElements'
const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">Disease</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>SignIn into your account</FormH1>
                            <FormLable htmlFor="for">Email</FormLable>
                            <FormInput type="email" required />
                            <FormLable htmlFor="for">Password</FormLable>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text onClick="/">Forget Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
