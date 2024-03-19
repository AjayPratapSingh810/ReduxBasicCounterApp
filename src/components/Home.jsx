import Display from "./Display"
import { addNumber, subNumber } from "../store/number"
import { useDispatch } from "react-redux";
export default function Home() {
    const dispatch = useDispatch(); git
    return <>
        <h1>Counter with redux</h1>
        <button onClick={() => dispatch(addNumber())}>Add</button>
        <button onClick={() => dispatch(subNumber())}>Sub</button>
        <Display />
    </>

}