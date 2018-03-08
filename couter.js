
let count = 0
const addOne = ()=>{
    count++
    renderCouterApp()
}

const minusOne= ()=>{
    count--
    renderCouterApp()
}
const reset = () =>{
    count = 0
    renderCouterApp()
}


const renderCouterApp = ()=>{
    const templateTwo = (
        <div>
            <h1>Cout: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot)
}
renderCouterApp()