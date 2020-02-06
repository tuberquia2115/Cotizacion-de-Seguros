import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    border: 1px solid  #e1e1e1;
    border-radius: 5px;
    padding: 1rem;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
margin: 0 1rem;
`;

const Buttom = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        background-color: #26C6DA;

    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem
`;
export {
    Campo,
    Label,
    Select,
    InputRadio,
    Buttom,
    Error
}