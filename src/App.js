import './App.css';
import Form from "./Form/Form";
import List from "./List/List";

function App() {
    //Разбиваем приложение на часть с инпутом и кнопкой добавления Form
    // и на часть со всеми компонентами дел List
    return (
        <div className="App">
            <Form/>
            <List/>
        </div>
    );
}

export default App;
