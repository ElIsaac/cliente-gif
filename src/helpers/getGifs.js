export const traerGif = async (categoria) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=UqFIK3cNjqXF7Uc7As7LIhgz02CBO5sq&q=${encodeURI(categoria)}&limit=10`)
    const { data } = await res.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }

    })
    console.log(gifs)
    return (gifs)
}