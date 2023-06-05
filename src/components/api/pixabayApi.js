import axios from "axios";

export async function fetchPixabeyRequest(search, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const MY_KEY = '25738423-b3273d9a56f64cc8a00238b49';
    const defaultSettings = 'image_type=photo&orientation=horizontal&per_page=12';
    

    try {
        const response = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${MY_KEY}&${defaultSettings}`) ;
        return response.data;
    } catch (error) {
        console.error(error.message);
    }    
}

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
