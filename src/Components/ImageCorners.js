

const ImageCorners = ({imageSource}) => {
  return (
    <div>
      <img src={imageSource} alt="corner" className="CornerPadding CornerBottomLeft" />
      <img src={imageSource} alt="corner" className="CornerPadding CornerBottomRight" />
      <img src={imageSource} alt="corner" className="CornerPadding CornerTopLeft" />
      <img src={imageSource} alt="corner" className="CornerPadding CornerTopRight" />
    </div>
  )
}

export default ImageCorners
