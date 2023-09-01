function ImageShow({image}) {
    console.log(image)
    return (
        <div className="ImageShow">
         <img src={image.urls.small} alt={image.alt_description} style={{}} />
        </div>
    )
}

export default ImageShow;