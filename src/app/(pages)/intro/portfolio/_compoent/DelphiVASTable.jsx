import DelphicomTable from "@/app/(component)/_table/DelphicomTable";
import useResponsive from "@/hook/useResponsive";

export default function DelphiVASTable() {
  const { mobile } = useResponsive();
  return (
    <>
      <style jsx>
        {`
          colgroup col:nth-child(1) {
            width: 151px;
          }
          colgroup col:nth-child(2) {
            width: 236px;
          }
          @media (max-width: 868px) {
            colgroup col:nth-child(1) {
              width: 100px;
            }
            colgroup col:nth-child(2) {
              width: 200px;
            }
          }
        `}
      </style>
      <DelphicomTable style={{ minWidth: 868 }}>
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th>분류</th>
            <th>서비스 종류</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={5} style={{ paddingRight: 0 }}>
              Delph-VAS
            </th>
            <th>
              선불카드 시스템
              <br />
              (Prepaid System)
            </th>
            <td>
              유선 및 무선 전화(국제 전화) 통화를 충전된 금액의 카드를 이용하여
              사용자가 고유의 ID Number를 이용하여 통화 할 수 있는시스템
            </td>
          </tr>
          <tr>
            <th>
              후불카드 시스템
              <br />
              (Postpaid System)
            </th>
            <td>
              유선 및 무선 전화(국제 전화) 통화를 사용자가 고유의 ID
              Number를이용하여 통화 한 후에 서비스 사업자가 사용자에게
              사용금액을청구할 수 있는 시스템
            </td>
          </tr>
          <tr>
            <th>Collect Call System</th>
            <td>
              발신자가 원하는 사람과 통화를 하기 위해서 특정번호에 접속한
              다음착신자가 전화 받기를 원할 경우, 발신자와 연결해 주며 통화에
              대한요금은 착신자에게 부담하는 서비스
            </td>
          </tr>
          <tr>
            <th>Conference Call System</th>
            <td>
              다자간의 통화를 요구할 경우, 여러 사람이 한 번에 통화 할 수
              있는시스템
            </td>
          </tr>
          <tr>
            <th>RBT-System</th>
            <td>
              RBT (Ring Back Tone) 서비스는 이러한 일반 기계음의
              링백톤을대체하여, 착신자가 지정한 컨텐츠 즉, 다양한 음악이나
              효과음등을 발신자에게 들려주는 서비스
            </td>
          </tr>
        </tbody>
      </DelphicomTable>
    </>
  );
}
