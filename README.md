# React Occult: EXPERIMENTAL, NOT PRODUCTION READY

<img width="100%" alt="Occult Charts" src="img/full_1.png">

## Design 
<img width="100%" alt="Design" src="img/design.jpg">


Full source code is at: [Demo Page](https://github.com/BigFatDog/react-occult/blob/e0967a2ff9906159873024b2daf0bfb4dd0c3360/docs/app/containers/Pages/OldFaithfulPage/index.js#L77)

## Quick Guide to API

```javascript 1.6
    <Paper {...paperProps}>
      <XAxis />
      <YAxis left={50} />
      <Annotation type={'y'} label={'vertical line'} y={100} />
      <Annotation
        type={AnnotationCalloutCircle}
        note={{ label: 'breakpoint', title: 'additionl information' }}
        score={10}
        subject={{ radius: 10 }}
        x={100}
        y={100}
      />
      <Line {...lineProps} />
      <Contour {...contourProps} />
    </Paper>
```
## Design Brief
* Components are freely composed within a `Frame`. Each component may have its dedicated data.
* All charts are translated into a render pipeline which contains ***only graphic primitives: areas, points and lines***.
* Render Pipeline are visualized in layers, in format of canvas render queue or SVG/HTML elements.

Other thoughts:
* when render pipeline is rendered in canvas, when can improve performance with ``reqAnimationFrame``. This is beyond the scope of `react` rendering
* when render pipeline is rendered in SVG/HTML, it is under ``react``'s control

## Try in dev
1. Download/Clone code
2. Run commands
```
npm install         // install dependencies
npm run dev         // view demos in web browser at localhost:8080
```
## Try in product
run command: ``npm install react-occult --save``

## Demo code
code is at: [demo usage](https://github.com/BigFatDog/react-occult/tree/master/docs/app/containers/Pages)

## Credits
Heavily inspired by [semiotic](https://semiotic.nteract.io/guides/annotations)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
