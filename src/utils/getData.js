const checkResponse = (response) => {
    if(response.status !== 200) {
        return {error: `Error with request ${response.status}`}
    }
    return response.json();
}
const getData = (url) => {
    return (
        fetch(url)
        .then(res => checkResponse(res))
        .catch(error => {
            throw new Error(`Error in getData : ${error}`);
        })
    );
};

export default getData;
