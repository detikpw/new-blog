import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

module.exports = (props) => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        // eslint-disable-next-line no-danger
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    // eslint-disable-next-line  jsx-a11y/html-has-lang
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {css}
      </head>
      <body {...props.bodyAttributes} style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 10px' }}>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          // eslint-disable-next-line no-danger
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
