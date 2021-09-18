import html from '../core.js'
import Header from '../component/header.js'
import Todolist from '../component/todolist.js'
import Footer from '../component/footer.js'
import {connect} from '../store.js'



function App({todos}){
    return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && Todolist()}
        ${todos.length > 0 && Footer()}
    </section>
    `
}

export default connect()(App)