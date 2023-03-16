import React from "react";
import { useMediaQuery } from 'react-responsive'
import './App.css'

import Web from "./web/Web";
import Tablet from "./tablet/Tablet";
import Mobile from "./mobile/Mobile";

function App() {
  const isWeb = useMediaQuery({
    query: "(min-width: 1024px)"
  })

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px) and (min-width: 426px)"
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })

  return (
    <>
      {isWeb && <Web />}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
    </>
  );
};

export default App;