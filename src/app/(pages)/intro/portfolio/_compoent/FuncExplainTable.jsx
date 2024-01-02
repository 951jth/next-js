import DelphicomTable from "@/app/(component)/_table/DelphicomTable";

export default function FuncExplainTable(props) {
  return (
    <>
      <style jsx>
        {`
          colgroup col:nth-child(1) {
            width: 259px;
          }
          @media (max-width: 578px) {
            colgroup col:nth-child(1) {
              width: 170px;
            }
          }
        `}
      </style>
      <DelphicomTable {...props} style={{ minWidth: 630 }}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>분류</th>
            <th>지원 기능</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>신호 처리</th>
            <td>
              <ul>
                <li>ISDN-PRI 신호처리 기능</li>
                <li>SS7-ISUP 신호처리 기능</li>
                <li>VoIP 신호 처리 기능</li>
                <li>R2 신호처리 기능</li>
                <li>{"SS7<->PR I<->R2<->SIP<->H.323 등 다양한 신호변경"}</li>
              </ul>
            </td>
          </tr>
          <tr>
            {/*     */}
            <th>중계 루트 제어</th>
            <td>
              <ul>
                <li>채널 관리 기능 (채널 생성/수정/삭제)</li>
                <li>
                  루트 그룹 관리, 루트 Prefix 관리 기능 (루트 그룹
                  생성/수정/삭제)
                </li>
                <li>채널 및 루트 상태 관리 기능</li>
                <li>중계선 헌팅 기능 (Sequential, Circular, Random)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>안내 멘트 삽입 기능</th>
            <td>
              <ul>
                <li>호 접속 시 안내 맨트 자동 삽입 기능</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>대량 아웃바운드 콜 발생 기능</th>
            <td>
              <ul>
                <li>대량의 아웃바운드 콜 생성기능</li>
                <li>아웃바운드 콜 대상 가입자 DB 관리 기능</li>
                <li>아웃바운드 콜 셋업시 호 자동 연결 기능</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>코드 관리 기능</th>
            <td>
              <ul>
                <li>
                  Operator 등급 별 코드 관리, 국가별, 지역별 코드 관리 기능
                </li>
                <li>
                  사업자 코드 관리, 서비스 코드관리, 회선사업자 코드 관리 기능
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>과금 기능</th>
            <td>
              <ul>
                <li>실시간 CDR 생성 및 과금 처리 기능</li>
                <li>과금 요율별 과금 처리 제어 기능</li>
                <li>과금 이력 조회, 과금 이력관리, 과금 이력 파일 생성 기능</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </DelphicomTable>
    </>
  );
}
