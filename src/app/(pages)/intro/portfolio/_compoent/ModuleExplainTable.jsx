import DelphicomTable from "@/app/(component)/_table/DelphicomTable";

export default function ModuleExplainTable() {
  return (
    <>
      <style jsx>
        {`
          colgroup col:nth-child(1) {
            width: 148px;
          }
          @media (max-width: 578px) {
            colgroup col:nth-child(1) {
              width: 112px;
            }
          }
        `}
      </style>
      <DelphicomTable style={{ minWidth: 578 }}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>서부 시스템</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>신호 처리부</th>
            <td>
              <ul>
                <li>{"SS7<->PRI, R2<->SS7, R2<->PRI 등 다양한 신호변경"}</li>
                <li>
                  {
                    "TDM(SS7, PRI, R2)<->VoIP(H.323, SIP) Gateway 기능(Optional)"
                  }
                </li>
                <li>{"IVR<->VoIP Gateway 연동 지원 PDU 실시간 디코딩"}</li>
                <li>{"지능망 연동 가능(Optional)"}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>IVR 시스템</th>
            <td>
              <ul>
                <li>선/후불 In/Out-Bound 호처리 및 시나리오 제어 기능</li>
                <li>DTMF 수집/송출 기능, 연속호 기능</li>
                <li> 발신번호 별 단축번호 처리 기능</li>
                <li>핀 번호 인증 처리 제어 기능</li>
                <li>안내 방송 송출 기능 및 다국적 언어 지원</li>
                <li>충전 시나리오 기능</li>
                <li>발신번호 별 음성인식 처리 기능(Optional)</li>
                <li>중계 루트 기능(시간별, Channel별, 접속번호별)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>WEB 서버</th>
            <td>
              <ul>
                <li>선불/ 후불 카드 생성, 조회, 충전, 잔액 조회, 생성 기능</li>
                <li>단축번호 관리 및 Speed Dial 기능- 낙전 처리 기능</li>
                <li>
                  후불 가입자 조회 및 생성, CDR(Call Detail Record) 관리 기능
                </li>
                <li>과금 요율 및 공휴일 관리 기능</li>
                <li>사업자/서비스/회선 사업자 관리 기능</li>
                <li>카드 판매 및 매출 관리 기능</li>
                <li>운용 보전 기능(장애,구성, 성능 감시)</li>
                <li>중계 루트 관리 및 과금 처리 기능</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </DelphicomTable>
    </>
  );
}
