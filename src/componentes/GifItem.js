import React from 'react'

export const GifItem = ({images}) => {
    return (
        <div className="card" >
  <img src={images.url} className="card-img-top col-md-10" alt="..." />
  <div className="card-body">
    <p className="card-text">{images.title}</p>
  </div>
</div>

    )
}
