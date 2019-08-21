import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default ({ data: { site } }) => (
  <Layout site={site}>
    <Container>
      <h1 style={{ color: '#3e3e3e' }}>
        Hi, I'm Shakib{' '}
        <span role="img" aria-label="wave-emoji">
          👋
        </span>
      </h1>
      <p>
        Hi, I am a Professional Software Engineer. I am currently pursuing my
        B.Sc. in Computer Science and Engineering. I love learning and working
        with new technologies. I have been coding in Python and JavaScript for
        more than three years now. Recently, I have also started learning
        Flutter.
      </p>
      <h3 style={{ color: '#3e3e3e' }}>Little Back Story</h3>
      <p>
        I was born in 1996 in Chittagong, Bangladesh. I first started coding
        when I was 15, I think. C was the first programming language I learned.
        Then after some time I started doing some competitive programming in
        various platforms like UVa, Hackerrank, CodeForces etc. I think this
        really helped me when I started to develop things, especially in the
        Backend.
      </p>
      <p>
        After that I tried Front-End Technologies(HTML, CSS, JS etc). But
        Backend Development was always appealing to me. So, I started learning
        some Backend Programming after a while. First, I tried Ruby on Rails for
        a while then after some time I tried Django and instantly I knew what my
        favorite framework is going to be. Since then, I have been working with
        Django, Python etc. Also, my previous Front-End knowledge helped me to
        work with frameworks like React.js, Vue.js etc.
      </p>
      <h3 style={{ color: '#3e3e3e', marginBottom: '2rem' }}>
        My Skills{' '}
        <span role="img" aria-label="biceps emoji">
          💪
        </span>
      </h3>
      <p>
        <b style={{ color: '#3e3e3e' }}>Languages:</b> HTML, CSS, JavaScript,
        Python, C, C++
      </p>
      <p>
        <b style={{ color: '#3e3e3e' }}>Front-End Frameworks:</b> React.js,
        Vue.js
      </p>
      <p>
        <b style={{ color: '#3e3e3e' }}>Back-End Frameworks:</b> Django, Flask,
        Node.js, Express.js
      </p>
      <p>
        <b style={{ color: '#3e3e3e' }}>Databases:</b> MySQL, Postgresql,
        Sqlite3
      </p>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
