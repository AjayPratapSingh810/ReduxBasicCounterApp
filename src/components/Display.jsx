import { useSelector } from "react-redux"



export default function Display(){
    const number = useSelector((state)=> state.number.number);
    console.log(number);
    return <>
    <h1>{number}</h1>
    </>
}