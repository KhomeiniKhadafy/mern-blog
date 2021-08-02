import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, LogoKabayan } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
  return (
    <div className="icon-wrapper">
       <img className="icon-medsos" src={img} alt="facebook" alt="icon"/>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      <div className="footer">
          <div>
              <img src={LogoKabayan} alt="logo" />
          </div>
          <div className="social-wrapper">
            <Icon img={ICFacebook}/>
            <Icon img={ICTwitter}/>
            <Icon img={ICInstagram}/>
            <Icon img={ICTelegram}/>
            <Icon img={ICDiscord}/>
            <Icon img={ICGithub}/>
          </div>
      </div>
      <div className="copyright">
        <p>© 2021 · All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer
