import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization : 'Client-ID dt835_VXxJXunKmsBvgnZfWHkmErV1QTZ-G6e5HayuU',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};


export default searchImages;