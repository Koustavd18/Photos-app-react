import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({images}) {
    const renderedImages = images.map((image) => {
        return < ImageShow key={image.id} image={image} />
    });


    return (
        <div >
            <h2 >Number of images : {images.length} </h2>
           <div className="ImageList"> {renderedImages} </div>
        </div>
    )
}

export default ImageList;