// Libraries
import { Component } from 'react'
import Head from 'next/head'

import stylesheet from '../../scss/main.scss'

class Meta extends Component {
  render () {
    return (
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='robots' content='index,follow' />
        <title>Ledger Explorer</title> 
        <link rel='icon preload' href='static/favicon.png' type='image/x-icon' />
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
        <link rel='dns-prefetch' href='//netdna.bootstrapcdn.com' />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <script async src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' />
      </Head>
    )
  }
}

export default Meta
