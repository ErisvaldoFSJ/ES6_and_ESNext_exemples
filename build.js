const appRoot =  document.getElementById('app')

let visibility = false
const toggleVisibility = () =>{
    visibility = !visibility
    renderApp()
}

const renderApp = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'hide ditels' : 'show diteles'}
            </button>
            {visibility && (
                <div>
                    <p>hey. these are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template,appRoot)
}
renderApp()