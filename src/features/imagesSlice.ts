

interface ImageStage {
    value : string;
}
const initialState = {
    images: [],
  };

// Action to add images to the state
const addImages = (images) => ({
    type: 'ADD_IMAGES',
    payload: images,
  });
  
  // Thunk for fetching images
  export const fetchImages = () => async (dispatch) => {
    try {
      const response = await fetch('your-api-endpoint');
      const images = await response.json();
      dispatch(addImages(images));
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

export default fetchImages;

