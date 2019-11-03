import React from 'react';
import { Helmet } from 'react-helmet';

import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { CartesianFrame } from 'occult';
import NeighborhoodMapProps from './data';

const NeighborhoodPage = props => {
  const title = brand.name + ' - Neighborhood';
  const description = brand.desc;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Blank Page" desc="Some text description">
        <CartesianFrame {...NeighborhoodMapProps} />
      </PapperBlock>
    </div>
  );
};

export default NeighborhoodPage;
