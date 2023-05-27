import Carousel from 'react-bootstrap/Carousel'

const ImagesCarousel = props => {
  return (
    <>
      <p>{props.images}</p>
      <Carousel>
        {props.images.map((image, i) => {
          return (
            <Carousel.Item key={image}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${i}`}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default ImagesCarousel
