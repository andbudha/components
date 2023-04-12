import {Accordion} from "../components/Accordion";


function AccordionPage() {

    const items = [
        {
            id: 'hj44hj',
            label: 'Can I use React in a project?',
            content: 'You can use React in any project you want.You can use React in any project you want.You can use React in any project you want.'
        },
        {
            id: 'nmn2121',
            label: 'Can I use JS in a project?',
            content: 'You can use JS in any project you want.You can use JS in any project you want.You can use JS in any project you want.'
        },
        {
            id: '321ghghn',
            label: 'Can I use CSS in a project?',
            content: 'You can use CSS in any project you want.You can use CSS in any project you want.You can use CSS in any project you want.'
        }
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default AccordionPage;
