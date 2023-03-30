import {useRef} from 'react';

function UseScrollToTop() {
  // functions which pushes viewport to top of page
  const ref = useRef();
  const {current} = ref;
  if (current) current.scrollIntoView({alignToTop: true});
  return ref;
}

export default UseScrollToTop;