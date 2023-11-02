import "./App.css";
import Accordion from "./component/Accordion";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

function App() {
    const[faqId,setFaqId]=useState([])
    const [faq, setFaq] = useState([
        {
            id:100,
            title: "How does React work?",
            content:
                "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, fugit provident vero nam ratione veniam fuga molestias temporibus nisi. Ratione enim incidunt error soluta mollitia, aut ipsam natus reprehenderit!",
        },
        {
            id:101,
            title: "How does JS work?",
            content:
                "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, fugit provident vero nam ratione veniam fuga molestias temporibus nisi. Ratione enim incidunt error soluta mollitia, aut ipsam natus reprehenderit!",
        },
        {
            id:102,
            title: "How does Python work?",
            content:
                "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, fugit provident vero nam ratione veniam fuga molestias temporibus nisi. Ratione enim incidunt error soluta mollitia, aut ipsam natus reprehenderit!",
        },
        {
            id:103,
            title: "How does Java work?",
            content:
                "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, fugit provident vero nam ratione veniam fuga molestias temporibus nisi. Ratione enim incidunt error soluta mollitia, aut ipsam natus reprehenderit!",
        },
    ]);

    return (
        <div className="app">
            <Accordion className ="accordion" faq={faq} setFaq={setFaq} faqId={faqId} setFaqId={setFaqId} FontAwesomeIcon={FontAwesomeIcon} faCaretDown={faCaretDown} />
        </div>
    );
}

export default App;
