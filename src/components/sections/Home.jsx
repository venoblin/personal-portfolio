import '../../styles/Home.css'
import emojiTyping from '../../assets/images/emoji-typing.gif'
import resume from '../../assets/documents/JonathanVillagomezSWE.pdf'
import { useEffect, useRef } from 'react'

const Home = (props) => {
  const innerWrapperRef = useRef()

  useEffect(() => {
    if (props.scrollState.isScrolling && props.scrollState.currentScrollY <= 75) {
      innerWrapperRef.current.style.margin = `${props.scrollState.currentScrollY}px 0 0 0`
    }
  })
  
  return (
    <section className='Home'>
      <div className='inner-wrapper' ref={innerWrapperRef}>
        <div className='emoji-wrapper'>
          <img className='emoji' src={emojiTyping} alt='Emoji typing' />
        </div>
        
        <div>
          <h1 className='intro-heading'>
            Hello there!{' '}
            <span className='wrapper'>
              I'm <span className='highlight'>Jonathan</span>, a
            </span>
            <span className='wrapper'>
              <span className='highlight'> Full-Stack Developer</span>!
            </span>
          </h1>
          <p className='location'>Located in Wilmington, Delaware 📍</p>

          <div className='inputs'>
            <a className='btn' href='#contact'>Let's Connect!</a>

            <a className='btn hollow' href={resume} target="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
