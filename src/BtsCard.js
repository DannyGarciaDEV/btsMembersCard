function BtsCard ({name, handle, image, description}) {
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={name}/>
                </figure>
            </div>

            <div className="card-content">
                <div classname="media-content">
                    <p className="title is-4"> {name}</p>
                    <p classname="subtitle is-6"> {handle} </p>
                </div>
                <div className="content"> {description} </div>
            </div>
        </div>
    )
}

export default BtsCard