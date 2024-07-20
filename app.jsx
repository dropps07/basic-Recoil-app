
import { useContext } from 'react'
import { CountContext } from './context';
import { RecoilRoot, useRecoilValue } from 'recoil';
//this is a recoil logic
function App() {

    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}
function Count() {
    return <div>
        <CountRenderer />
        <Buttons />
    </div>
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <div>
        <b>{count}</b>
    </div>
}

function Buttons() {
    const count = useRecoilValue(countAtom); //this is how we get value of count
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrement</button>
    </div>
}




export default App
