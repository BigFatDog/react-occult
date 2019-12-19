import React from 'react';
import { XAxis, YAxis, OFrame } from 'occult';
import { PapperBlock } from 'dan-components';
import { VerticalISOTypeChart } from './PencilProps';

const Sketch = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <OFrame {...VerticalISOTypeChart} />
    </PapperBlock>
  );
};

export default Sketch;
