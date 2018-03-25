import Head from 'next/head'

const defaultTitle = 'Petaluma GAP AVA'
const defaultDescription = "California's newsest American American Viticultural Area (AVA)"

const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={ description || defaultDescription } />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/icomoon.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossOrigin="anonymous" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossOrigin="anonymous" />
      <script dangerouslySetInnerHTML={{ __html: `
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o);analytics.integrationOptions=e};analytics.SNIPPET_VERSION="4.0.1";
        analytics.load("4WFuga7SBgOWgNpuUm1JEfwT6JMPGX46");
        analytics.page();
        }}();
      `}} />
    </Head>
  )
}

export default Header
