const getDate = (url) => {
    return (
        fetch(url)
        .then(res => res.json())
        );
};
export default getDate;