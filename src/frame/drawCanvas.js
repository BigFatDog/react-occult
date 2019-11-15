import React from 'react';
import * as Rough from 'roughjs-es5/lib/canvas';

import chuckCloseCanvasTransform from '../layers/VisualizationLayer/chuckCloseCanvasTransform';

const RoughCanvas = Rough.RoughCanvas;

const drawCanvas = ({ props, canvasDrawing }) => {
  if (props.frontCanvas && props.backCanvas) {
    const {
      frontCanvas,
      margin,
      width,
      height,
      position,
      canvasPostProcess
    } = props;

    const devicePixelRatio = window.devicePixelRatio || 1;

    const size = [
      width + margin.left + margin.right,
      height + margin.top + margin.bottom
    ];

    const context = frontCanvas.getContext('2d');
    context.setTransform(
      devicePixelRatio,
      0,
      0,
      devicePixelRatio,
      margin.left,
      margin.top
    );

    let rc;

    canvasDrawing.forEach(piece => {
      const style = piece.styleFn
        ? piece.styleFn({ ...piece.d, ...piece.d.data }, piece.i) || {}
        : {
            fill: 'black',
            stroke: 'black',
            opacity: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            strokeWidth: 1
          };

      const fill = style.fill ? style.fill : 'black';
      const stroke = style.stroke ? style.stroke : 'black';
      context.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        margin.left * devicePixelRatio,
        margin.top * devicePixelRatio
      );
      context.translate(...position);
      context.translate(piece.tx, piece.ty);
      context.fillStyle = fill;
      context.strokeStyle = stroke;
      context.lineWidth = style.strokeWidth ? style.strokeWidth : 0;

      let rcSettings = {};
      const renderObject =
        piece.markProps.renderMode ||
        (piece.renderFn &&
          piece.renderFn({ ...piece.d, ...piece.d.data }, piece.i));
      const actualRenderMode =
        (renderObject && renderObject.renderMode) || renderObject;

      if (actualRenderMode) {
        rc = rc || new RoughCanvas(frontCanvas);
        const rcExtension =
          (typeof renderObject === 'object' && renderObject) || {};
        rcSettings = {
          fill,
          stroke,
          strokeWidth: context.lineWidth,
          ...rcExtension
        };
      }

      if (
        piece.markProps.markType === 'circle' ||
        (piece.markProps.markType === 'rect' && piece.markProps.rx > 0)
      ) {
        let vizX = 0,
          vizY = 0,
          r = piece.markProps.r;
        if (piece.markProps.width) {
          const halfWidth = piece.markProps.width / 2;
          vizX = piece.markProps.x + halfWidth;
          vizY = piece.markProps.y + halfWidth;
          r = halfWidth;
        }
        if (actualRenderMode === 'sketchy') {
          if (context.globalAlpha !== 0) rc.circle(vizX, vizY, r, rcSettings);
        } else {
          context.beginPath();
          context.arc(vizX, vizY, r, 0, 2 * Math.PI);
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0)
            context.fill();
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (
            style.stroke &&
            style.stroke !== 'none' &&
            context.globalAlpha !== 0
          )
            context.stroke();
        }
      } else if (piece.markProps.markType === 'rect') {
        if (actualRenderMode === 'sketchy') {
          context.globalAlpha = style.opacity || 1;
          if (context.globalAlpha !== 0)
            rc.rectangle(
              piece.markProps.x,
              piece.markProps.y,
              piece.markProps.width,
              piece.markProps.height,
              rcSettings
            );
        } else {
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0)
            context.fillRect(
              piece.markProps.x,
              piece.markProps.y,
              piece.markProps.width,
              piece.markProps.height
            );
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (
            style.stroke &&
            style.stroke !== 'none' &&
            context.globalAlpha !== 0
          )
            context.strokeRect(
              piece.markProps.x,
              piece.markProps.y,
              piece.markProps.width,
              piece.markProps.height
            );
        }
      } else if (piece.markProps.markType === 'path') {
        if (actualRenderMode === 'sketchy') {
          context.globalAlpha = style.opacity || 1;
          rc.path(piece.markProps.d, rcSettings);
        } else {
          const p = new Path2D(piece.markProps.d);
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (
            style.stroke &&
            style.stroke !== 'none' &&
            context.globalAlpha !== 0
          )
            context.stroke(p);
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0)
            context.fill(p);
        }
      } else {
        console.error('CURRENTLY UNSUPPORTED MARKTYPE FOR CANVAS RENDERING');
      }
    });
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalAlpha = 1;

    if (canvasPostProcess === 'chuckClose') {
      chuckCloseCanvasTransform(canvasContext, context, size);
    } else if (typeof canvasPostProcess === 'function') {
      canvasPostProcess(canvasContext, context, size);
    }
  }
};

export default drawCanvas;
