import userImg from '../../assets/hombre.png'
import './Section.css'

const users =[
  {
    id: 1,
    name: 'Marty McFly',
    description: 'Frontend Developer',
    image: userImg
  },
  {
    id: 2,
    name: 'Emmett Brown',
    description: 'Backend Developer',
    image: userImg
  },
  {
    id: 3,
    name: 'Marty McFly',
    description: 'Designer',
    image: userImg
  },
  
]

const Section = () => {

  const handleClick = (name) =>{
    console.log(`Contactando a ${name}`)
  }

  return (
<section>
  {
    users.map(({id, name, description,image})=>{
      return(
        <div className='card' key={id}>
          <img className='image' src={image} alt={name} />
          <h2 className='name'>{name}</h2>
          <p className='description'>{description}</p>
          <button id={id} onClick={()=>handleClick(name)}>Contactar</button>
        </div>
      )
    })
  }
</section>
  )
}

export default Section
