import {Accordion} from "./components/Accordion";


function App() {

    const items = [
        {
            id: Math.random(),
            label: 'Can I use React in a project?',
            content: 'You can use React in any project you want.'
        },
        {
            id: Math.random(),
            label: 'Can I use JS in a project?',
            content: 'You can use JS in any project you want.'
        },
        {
            id: Math.random(),
            label: 'Can I use CSS in a project?',
            content: 'You can use CSS in any project you want.'
        }
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default App;
