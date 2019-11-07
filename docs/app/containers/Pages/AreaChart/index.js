import React from 'react';
import { Helmet } from 'react-helmet';
import { TheaterSummaryData } from '../ContourPage/ThreaterSummaryData';

import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

import { XYFrame } from 'occult';

const AreaPage = props => {
  const title = brand.name + ' - Sample Area Chart';
  const description = brand.desc;

  const frameProps = {
    width: 700,
    height: 400
  };

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
      <PapperBlock title="Area Chart" desc="Basic Area Chart">
        <XYFrame {...frameProps} />
      </PapperBlock>
    </div>
  );
};

export default AreaPage;
