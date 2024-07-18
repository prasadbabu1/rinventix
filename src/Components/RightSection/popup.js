import React from 'react';

const Popup = () => { 
  const getdata = localStorage.getItem("data");
  const jdata = JSON.parse(getdata);
  // console.log(jdata);

  return (
    <div style={{ display: 'flex', flexDirection: 'column',justifyContent:"flex-end" }}> 
      {
        jdata.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row',justifyContent:"flex-end" }}>
            <img src={item.Image} alt="item" style={{ maxWidth: '50%' }} />
            <p>{item.Message}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Popup;
