const api_key = 'E0Ib4wX51q5LDdH85FbvB5QSqyhMuzen';

const http_call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

http_call.then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
.catch( console.warn );