import image from './oie_lI0dWmLX8Scb.jpg'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiSuitcaseLine } from 'react-icons/ri'

const AboutYou = () => {
  return (
    <div className="aboutyou">
      <div className="online-outer">
        <div className="online"></div>
      </div>
      <img src={image} alt="" className="image" />
      <div className="rating">
        <p>
          <AiOutlineStar className="icon" /> 5.0
        </p>
        <p>
          <BsCurrencyDollar className="icon" />
          75.0/hr
        </p>
        <p>
          <RiSuitcaseLine className="icon" /> 14 jobs
        </p>
      </div>
      <div className="txt">
        {' '}
        <div className="bio">
          <p>
            "I'm a developer with experience in building websites of small and
            medium sized businesses. Whether you're trying to win work, list
            your services or even create a whole online store - i can help!
          </p>
        </div>
        <div className="list">
          <ul>
            <li>
              I'm experienced in HTML and CSS 3,PHP,jQuery,WordpPress and SEO
            </li>
            <li>I'll fully project manager your brief from start to finish</li>
            <li>
              Regular communication is really to me, so let's keep in touch!"
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutYou
