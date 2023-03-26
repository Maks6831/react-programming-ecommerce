import {useRef} from 'react';

function UseScrollToTop() {
  const ref = useRef();
  const {current} = ref;
  if (current) current.scrollIntoView({alignToTop: true});
  return ref;
}

export default UseScrollToTop;