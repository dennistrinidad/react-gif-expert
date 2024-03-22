export const getGifs = async (category) => {
    const limit = 5;
    const query_param = category;
    const url = 'https://api.giphy.com/v1/gifs/search';
    const api_key = 'q7KfLyhyFrLuMpZ62fDYG3lSCNtq7U3X';
    const api = `${url}?api_key=${api_key}&q=${query_param}&limit=${limit}`;

    const response = await fetch(api);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img?.id,
        title: img?.title,
        url: img?.images?.downsized_medium?.url
    }))

    return gifs;
}