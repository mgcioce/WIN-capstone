import React, {useState} from 'react';
import Disqus from "disqus-react";

function Discussion(props) {
    //state hooks
    let [title, setTitle] = useState(props.title);
    let [prompt, setPrompt] = useState(props.prompt);
    let [creation_date, setCreationDate] = useState(props.creation_date);
    let [editing, setEditing] = useState(false);

    //disqus config
    const disqusConfig = {
        url: "http://localhost:3000/",
        identifier: `${props.id}`,
        title: title
    };
    let onClickSetEditing = () => {
        setEditing(true);
    };


    return editing ? (
        <div>not done yet</div>
    ) : (
        <div>
            <h3>{title}</h3>
            <p>{prompt}</p>
            <div>
                <button onClick={onClickSetEditing}>Edit</button>
                <h4>{creation_date}</h4>
            </div>
            <Disqus.DiscussionEmbed shortname={'movieclub-1'} config={disqusConfig}/>
        </div>
    );
}

export default Discussion;


