// Core stuff
import React from 'react';

// Components
import { Helmet } from 'react-helmet'

// Other stuff
import Icon from '../assets/favicon.ico'

export default function helmet(props) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Adam Pruner | ${props.route}`}</title>
      <link rel="shortcut icon" type="image/png" href={`${Icon}`} sizes="16x16" />
    </Helmet>
  )
}