import buttonComponent from "./buttonComponent"
const Header = ({ title }) => {
  return (
    <header class = 'header'>  
        <h1> {title} </h1>
        <buttonComponent />
    </header>
  )
}
Header.defaultProps = {
    title: 'Log In',
}

// const styling = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
