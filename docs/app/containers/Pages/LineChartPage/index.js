import React from 'react';
import { Paper, Line, XAxis, YAxis } from 'occult';
import Grid from '@material-ui/core/Grid';
import { PapperBlock } from 'dan-components';
import {
  CumulativeReverse,
  Cumulative,
  Area,
  Line as lineProps,
  Bumpline,
  Bumparea,
  BumpareaInvert,
  Linepercent,
  StackedpercentInvert,
  Stackedpercent,
  StackedareaInvert,
  Stackedarea
} from './types';
import {withStyles} from "@material-ui/core";

const styles = {
    frame: {
        background:
            'linear-gradient( rgba(26,44,129,1) 7.3%, rgba(38,206,205,1) 89.3% )',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    }
};

const LinePage = props => {
  const frameProps = name => ({
    margin: { left: 10, bottom: 10, right: 10, top: 50 },
    width: 500,
    height: 300,
    title: (
      <text textAnchor="middle">
        <tspan fill={'#FFFFFF'} opacity={0.6}>{name}</tspan>
      </text>
    )
  });

  const types = [
    { name: 'Line', type: lineProps },
    { name: 'Area', type: Area },
    { name: 'CumulativeReverse', type: CumulativeReverse },
    { name: 'Cumulative', type: Cumulative },
    { name: 'Bumpline', type: Bumpline },
    { name: 'Bumparea', type: Bumparea },
    { name: 'BumpareaInvert', type: BumpareaInvert },
    // { name: 'Difference', type: Difference },
    { name: 'Linepercent', type: Linepercent },
    { name: 'StackedpercentInvert', type: StackedpercentInvert },
    { name: 'Stackedpercent', type: Stackedpercent },
    { name: 'StackedareaInvert', type: StackedareaInvert },
    { name: 'Stackedarea', type: Stackedarea }
  ];

    const { classes} = props
  const rendered = types.map(d => {
    return (
        <Grid container item xs={6} style={{marginBottom: 10}}>
            {/*<PapperBlock>*/}
            <Paper {...frameProps(d.name)} className={classes.frame}>
                {/*<XAxis label={'Year'}*/}
                {/*       showTickLines={false}*/}
                {/*/>*/}
                <YAxis
                    showLabels={false}
                    jaggerBase={true}
                    // label={'Count'}
                    baseline={'under'}
                    tickLineGenerator={({ xy }) => (
                        <path
                            style={{
                                fill: '#efefef',
                                stroke: '#ccc',
                                opacity: 0.3,
                                strokeDasharray: '4 4'
                            }}
                            d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}`}
                        />
                    )}
                />
                <Line {...d.type}
                />
            </Paper>
            {/*</PapperBlock>*/}
        </Grid>
    );
  });


  return (
      <Grid container spacing={10}  direction="row"
            justify="center"
            alignItems="center">
          {rendered}
      </Grid>
  );
};

export default withStyles(styles)(LinePage);
