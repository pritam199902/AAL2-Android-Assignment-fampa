import React, { useState, useEffect } from "react";
import PullToRefresh from 'react-simple-pull-to-refresh';

import Navbar from "./Components/Navbar";
import C1 from "./Components/C1/C1";
import C3 from "./Components/C3/C3";
import C5 from "./Components/C5/C5";
import C6 from "./Components/C6/C6";
import C9 from "./Components/C9/C9";
import Loading from "./Components/Loading";


const API = 'https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad'


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const [C1Data, setC1Data] = useState([])
  const [C3Data, setC3Data] = useState([])
  const [C5Data, setC5Data] = useState([])
  const [C6Data, setC6Data] = useState([])
  const [C9Data, setC9Data] = useState([])


  ////////////////////////////////////////////////
  //    Action Handlers >> functions           //
  //////////////////////////////////////////////
  const loadData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const { card_groups } = await fetch(API).then(res => res.json())
      // console.log(card_groups);
      setC1Data(card_groups.filter(data => data.design_type === 'HC1'))
      setC3Data(card_groups.filter(data => data.design_type === 'HC3'))
      setC5Data(card_groups.filter(data => data.design_type === 'HC5'))
      setC6Data(card_groups.filter(data => data.design_type === 'HC6'))
      setC9Data(card_groups.filter(data => data.design_type === 'HC9'))

      setIsLoading(false)
    } catch (e) {
      setIsError(true)
      setErrorMessage(e.message)
      setIsLoading(false)
    }
  }



  // Refresh action handler //
  const handleRefresh = async () => {
    await loadData()
  }



  useEffect(() => {
    var mount = true
    if (mount) {
      const load = async () => {
        await loadData()
      }
      load()
    }
    return () => {
      mount = false
    }
  }, [])



  return (
    <PullToRefresh onRefresh={handleRefresh} canFetchMore={isLoading} pullingContent={true} >
      {/* NAVBAR */}
      <Navbar />

      {isLoading ? <Loading /> :
        <div className="container py-3" >
          <div className="row m-0 ">
            <div className="col-lg-6 col-md-8 p-0 m-auto" >
              {/* All the card components are placed here */}

              {C3Data.map((dd, i) => <C3 key={i} data={dd} />)}

              {C6Data.map((dd, i) => <C6 key={i} data={dd} />)}

              {C5Data.map((dd, i) => <C5 key={i} data={dd} />)}

              {C9Data.map((dd, i) => <C9 key={i} data={dd} />)}

              {C1Data.map((dd, i) => <C1 key={i} data={dd} />)}


              {/* --------------------------------------- */}
            </div>
          </div>
        </div>
      }


    </PullToRefresh>
  );
}

export default App;
