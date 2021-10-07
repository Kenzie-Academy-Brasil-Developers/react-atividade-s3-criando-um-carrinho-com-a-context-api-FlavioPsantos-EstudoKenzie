import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex: 1;
 flex-wrap:wrap;
 font-size: 30px;
 justify-content:space-evenly;
 align-items: center;
 height: 100vh;
 background-color: #5BD0F0;
 ul{
     width: 60%;
     padding: 5px;
     list-style-type: none;
     font-weight: bold;
 }
 li{
    list-style-type: none;
    margin-left: 10px;
    width: 30%;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    display: flex;
    text-align: center;
    button{
        margin: 10px;
        background-color: green;
        border: none;
        border-radius: 5px;
        width: 70px;
    }
 }

`