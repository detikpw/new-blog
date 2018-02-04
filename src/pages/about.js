import React from 'react';
import { get } from 'lodash/fp';

export default ({ data }) => (
  <div>
    <h1>
      About {get(['site', 'siteMetadata', 'title'])(data)}
    </h1>
    <p>{"We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food."}</p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
