// this contain reusable code for different section
import corona from '../../images/coronaImage.png'
import about from '../../images/about.svg'
import chatbot from '../../images/chatbot.svg'
import signin from '../../images/signin.svg'

export const homeObjOne = {
    id: 'covid',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'covid-19',
    headLine: 'Know More About Corona',
    description: 'Coronaviruses are a family of viruses commonly infecting people and animals. They are responsible for up to one-third of respiratory infections in children and adults, ranging from a common cold to more severe illness, like pneumonia.',
    buttonLable: 'Know More',
    imgStart: false,
    alt: 'corona Img',
    dark: true,
    primary: true,
    darkText: false,
    image: corona,
    to: '/coronacounter'  
};


export const homeObjTwo = {
    id: 'symtom',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'symptom analaysis',
    headLine: 'We provides you with a fast and accurate health assessment',
    description: 'Select the symtom you are suffering from and our AI model will predict the most probable disease you might have.',
    buttonLable: 'Know More',
    imgStart: true,
    alt: 'doctor Img',
    dark: false,
    primary: false,
    darkText: true,
    image: chatbot,
    to: '/symtom' 
};

export const homeObjThree = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About us',
    headLine: 'Know More About us',
    description: 'Coronaviruses are a family of viruses commonly infecting people and animals. They are responsible for up to one-third of respiratory infections in children and adults, ranging from a common cold to more severe illness, like....',
    buttonLable: 'Know More',
    imgStart: false,
    alt: 'corona Img',
    dark: true,
    primary: true,
    darkText: false,
    image: about
};

export const homeObjFour = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sign up',
    headLine: 'We provides you with a fast and accurate health assessment',
    description: 'Select the symtom you are suffering from and our AI model will predict the most probable disease you might have.',
    buttonLable: 'SignUp',
    imgStart: true,
    alt: 'doctor Img',
    dark: false,
    primary: false,
    darkText: true,
    image: signin
};
