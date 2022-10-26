import Nav from './Nav'
import Intro from './Intro'
import Script from 'next/script';

const Layout = ({ children }) => {
    return (
      <div>
        <Intro />
        <Nav />
        <main>{children}</main>
      </div>
    )
}


export default Layout;