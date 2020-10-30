async function postConnect(url, headers1, body1) {
    return await fetch(url, {
            method: `POST`,
            headers: headers1,
            body: body1

        })
        .then((response) => response.json());
}


async function getConnect(url) {
 
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status} `);
    }
    return res.json();
}


export {postConnect};
export {getConnect};