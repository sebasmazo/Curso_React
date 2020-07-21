
const getImage = async () => {
    try {
        const api_key = 'E0Ib4wX51q5LDdH85FbvB5QSqyhMuzen';
        const http_call = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await http_call.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}
document.body.append('Hola mundo');

getImage();

