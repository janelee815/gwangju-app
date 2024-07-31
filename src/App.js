import React, { useEffect, useRef } from "react";

const { kakao } = window;

function App() {
  const mapContainer = useRef(null); // Ref를 사용하여 지도를 담을 DOM 요소에 접근합니다.

  useEffect(() => {
    if (mapContainer.current) { 
      const options = {
        center: new kakao.maps.LatLng(35.17691, 126.90689),
        level: 5
      };
      const map = new kakao.maps.Map(mapContainer.current, options);
    }
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ width: "500px", height: "550px" }}>
        <div style={{ position: 'absolute', top: '20px', left: '10px', backgroundColor: '#Ffffff', width: '300px', height: '50px', zIndex: '2',
        border:'1px solid #Ffffff',boxShadow:'1px 1.5px 2px #dbdad9',borderRadius:'8px' }}></div>
        <div style={{backgroundColor:'#0a5cff', position:'absolute', zIndex:'2', width:'50px', height:'50px', top:'20px', left:'328px',
          borderRadius:'8px',boxShadow:'1px 1.5px 2px #256dfa'
        }}></div>
      </div>

      <div>
        <div>
          <div style={{width:'48px', height:'4px',backgroundColor:'#c2c2c2', borderRadius:'10px', marginLeft:'167px', marginTop:'6px'}}></div>
          <div style={{width:'110px', height:'34px', background:'white', border:'1px solid #c2c2c2',
          borderRadius:'30px', marginLeft:'135px', marginTop:'20px'}}></div>
        </div>
        <p style={{marginLeft:'12px'}}><b style={{color:'#0a5cff', fontWeight:'400'}}>광주</b>님을 위한 <b>가까운 주차장</b></p>
      </div>

      <div>
        <div>
          <p style={{marginLeft:'13px', color:'#0a5cff', fontWeight:'800'}}>효죽 공영 주차장</p>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOatxtayE7Y5dY_8HB2G_rv5SH5gdn7UDlMw&s' style={{width:'170px',marginTop:'-30px',marginLeft:'210px',
            borderRadius:'8px'
          }} />
          <p style={{marginLeft:'13px', marginTop:'-100px', fontSize:'12px',color:'#c2c2c2'}}>용봉로138번길 11</p>
          <p style={{marginLeft:'14px', marginTop:'-10px', fontSize:'13px'}}>TEL. 062-444-444</p>
          <p style={{marginLeft:'13px', marginTop:'-4px', fontSize:'13px', fontWeight:'600'}}>평일 08:00 - 19:00</p>
          <p style={{marginLeft:'13px', marginTop:'-12px', fontSize:'13px', fontWeight:'600'}}>토요일 08:00 - 19:00</p>
          <p style={{marginLeft:'13px', marginTop:'-12px', fontSize:'13px', fontWeight:'600'}}>일요일 08:00 - 19:00</p>
        </div>
      </div>


      <div>
        <p style={{marginLeft:'13px', marginTop:'-5px'}}>총 주차공간 : 60 <b style={{color:'#0447ba'}}>현재주차가능공간 : 22</b></p>
        <div style={{width:'85px', height:'35px', background:'#0a5cff', 
          borderRadius:'30px', marginLeft:'298px', marginTop:'-30px'}}></div>
      </div>
    </div>
  );
}

export default App;

