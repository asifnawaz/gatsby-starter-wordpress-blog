import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const UserAgent = require('user-agents'); 
   
const userAgent = new UserAgent();

//console.log(JSON.stringify(userAgent.data, null, 1));

  // Create pages here
if(userAgent.data.deviceCategory.toString() == "mobile" && userAgent.data.deviceCategory.toString() > 0){
    //window.location="https:///";

}


const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with &heart;
        {` `}
			{JSON.stringify(userAgent.data, null, 1)}
      </footer>
    </div>
  )
}

export default Layout
