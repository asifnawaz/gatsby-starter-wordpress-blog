import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import * as rdd from 'react-device-detect';

//const userAgent = UserAgent.getUserAgent(); 

//console.log(JSON.stringify(userAgent.data, null, 1));
/*
  // Create pages here
if(userAgent.data.deviceCategory.toString() == "mobile" && userAgent.data.screenHeight.toString() > 0 && userAgent.data.userAgent.indexOf('face') == 0){
   //{rdd.browserName}
			{rdd.engineName}
			{rdd.deviceDetect.toString()}

}
*/

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
       <a class="home" href="#home">Home</a><a class="news" href="#news">News</a>
	   <a class="about" href="#about">About</a><a class="contact" href="#contact">Contact</a>
	   
      </header>

      <main>{children}</main>

      
    </div>
  )
}

export default Layout
