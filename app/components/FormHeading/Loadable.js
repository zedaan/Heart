/**
 *
 * Asynchronously loads the component for FormHeading
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
