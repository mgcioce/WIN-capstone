import React, {useState} from 'react';

function DiscussionForum(props) {
    //hooks
    let [discussions, setDiscussions] = useState(initialize);

    //functions
    async function initialize() {
        let response = await fetch("http://localhost:8080/discussion/all", {method: 'GET'});

    }
    return (
        <p>{discussions}</p>
    );
}

export default DiscussionForum;
