import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'

function Home(props) {
  return (
    <React.Fragment>
      <Section1 {...props} />
      <Section2 title='hoat-dong' {...props} />
      <Section3 {...props} />
      <Section4 title='nghien-cuu-dao-tao' {...props} />
      <Section5 {...props} />
      <Section6 {...props} title='lien-he' />
    </React.Fragment>
  )
}
export default Home
