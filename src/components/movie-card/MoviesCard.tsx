import { OljebraStar } from 'oljebra-rating'
import React from 'react'
import { useNavigate } from 'react-router'
import "./styles.scss"

interface IMovieCard {
  height : string,
  width : string,
  url : string,
  alt : string,
  text : string,
  rating : number
  image : string
}

const MovieCard  : React.FC<IMovieCard>= (props) => {
  const navigate = useNavigate()
  const { alt,height, rating, text , url, width, image} = props

  const navigateToShow = () => {
    setTimeout(()=> {
      navigate(url)
    }, 300)
  }
  return (
    <div className="movie-card" onClick={navigateToShow}>
      <img src={image} width={width} height ={ height} alt={alt} className="" />
        <OljebraStar gap='2px' max={5} size ={12} rating ={rating} color="gold" backgroundColor='#CBCBCB'/>
      <p className="">{text}</p>
    </div>
  )
}

export default MovieCard