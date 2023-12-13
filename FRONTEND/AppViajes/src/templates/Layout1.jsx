import Card from 'react-bootstrap/Card';
import Navbarra from './../components/Navbar.jsx';


const DefaultLayout = (props) => {
    const children = props.children;
  return (
    <>
    <Navbarra/>


      <div style={{padding : 20 }}>
        <Card >
          {children}
        </Card>
      </div>
        
    </>
  )
}

export default DefaultLayout;