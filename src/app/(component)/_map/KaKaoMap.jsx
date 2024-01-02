import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JSKEY}&libraries=services,clusterer&autoload=false`;
export default function KakaoMap() {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <div className={{ width: "100%", height: 554 }}>
        <Map
          center={{ lat: 37.4795130993704, lng: 126.887511773421 }}
          style={{ width: "100%", height: "360px" }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: "#000" }}>Hello World!</div>
          </MapMarker>
        </Map>
      </div>
    </>
  );
}
