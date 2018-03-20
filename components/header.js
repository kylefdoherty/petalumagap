import Head from 'next/head'

const defaultTitle = 'Petaluma GAP AVA'
const defaultDescription = "California's newsest American American Viticultural Area (AVA)"

const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={ description || defaultDescription } />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    </Head>
  )
}

export default Header
