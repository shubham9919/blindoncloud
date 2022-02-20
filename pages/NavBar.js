import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import FullMenu from './NavBar/FullMenu';
import HamburgerMenu from './NavBar/HamburgerMenu';
import Styles from "../styles/NavBar.module.css"



const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', e => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', e => updateTarget(e));
  }, []);

  return targetReached;
};



function NavBar() {
  const isBreakpoint = useMediaQuery(767)
  return (
    <div className={Styles.mobilenav}>
      {isBreakpoint ? <HamburgerMenu></HamburgerMenu> : <FullMenu></FullMenu>}
    </div>
  )
}

export default NavBar 