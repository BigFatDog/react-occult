import React from 'react';
import { XAxis, YAxis, Paper } from 'occult';
import { PapperBlock } from 'dan-components';
import { VerticalISOTypeChart } from './PencilProps';

const Sketch = props => {
  const { classes } = props;
  return (
    <PapperBlock>
      <Paper {...VerticalISOTypeChart} />
    </PapperBlock>
  );
};

export default Sketch;
