import image from './oie_lI0dWmLX8Scb.jpg'
import { AiOutlineStar } from 'react-icons/ai'
import { RiSuitcaseLine } from 'react-icons/ri'

const AboutYou = () => {
  return (
    <div className="about-you">
      <div className="online-outer">
        <div className="online"></div>
      </div>
      <img src={image} alt="" className="image" />
      <div className="rating">
        <p>
          <AiOutlineStar className="icon" /> 5.0
        </p>
        <p>
          <RiSuitcaseLine className="icon" /> 14 clients
        </p>
      </div>
      <div className="txt">
        {' '}
        <div className="bio">
          <p>
            "I am a lawyer from Brazil. I attended college in the USA (Business
            Degree) and lived there for about seven years (I speak English
            fluently).
          </p>
        </div>
        <div className="list">
          <ul>
            <li>I'm experienced in Divorce cases.</li>
            <li>
              I can help you with any area of law, specially in Business Law,
              Tech Law and LGPD or GDPR.
            </li>
            <li>
              I have a lot of experience as a Virtual Assistant, and I have
              worked with several companies and startups coming to India in
              their legal and business needs."
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutYou
