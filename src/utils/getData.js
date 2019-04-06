const checkResponse = (response) => {
    if(response.status !== 200) {
        return `Error with request ${response.status}`
    }
    return response.json();
}
const getData = (url) => {
    return (
        fetch(url)
        .then(res => checkResponse(res))
    );
};

export default getData;
