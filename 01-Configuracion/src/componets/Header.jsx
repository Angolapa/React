import './Header.css';
// import PropTypes from 'prop-types';

 export const Header = ({children, title, show}) => {
  return (
<header className='header'>
    <h1 className='title'>{title || "Titulo por defecto"}</h1>
    {children}

    {
        show && <p>Este texto se muestra solo si el prop Show es True</p>
}
    
</header>
  )
}
// Revisar el archivo eslintrc.cjs  

// Header.propTypes ={
//     children: PropTypes.node,
//     title: PropTypes.string,
// }