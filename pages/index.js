import React, { Component } from 'react'
import Head from 'next/head'
import {
  Button,
  Container,
} from 'bloomer'

import Nav from '../components/nav'

class Index extends Component {
  render() {
    return (
      <main>
        <Head>
          <title>Title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
        </Head>
        <Container isFluid style={{ margin: '0', height: '2000px' }}>
          <Nav />
        </Container>
      </main>
    )
  }
}

export default Index
