import Loadable from 'react-loadable';
import Loading from 'dan-components/Loading';

export const BarChartPage = Loadable({
  loader: () => import('./Pages/ContourPage'),
  loading: Loading
});

export const LineChartPage = Loadable({
  loader: () => import('./Pages/basic/LineChartPage'),
  loading: Loading
});

export const ContourPage = Loadable({
  loader: () => import('./Pages/ContourPage'),
  loading: Loading
});

export const HeatmapPage = Loadable({
  loader: () => import('./Pages/HeatmapPage'),
  loading: Loading
});

export const HexbinPage = Loadable({
  loader: () => import('./Pages/HexbinPage'),
  loading: Loading
});

export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading
});

export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading
});
