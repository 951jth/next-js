import dayjs from "dayjs";
import _isNil from "lodash/isNil";
import { objectClean } from "./Global";

const HELPER_NAME = "FormatHelper";

export function formatBoolean(bool) {
  return bool === true ? "true" : "false";
}

export function parseBoolean(string) {
  if (string === "true") return true;
  if (string === "false") return false;
  throw Error(HELPER_NAME + ": " + "잘못된 boolean string 입니다.");
}

export function formatNumber(number, options) {
  if (_isNil(number)) return options?.defaultValue ? options?.defaultValue : "";
  if (!_isNil(options?.min)) return number > options?.min ? String(number) : "";
  return String(number);
}

export function parseNumber(string, options) {
  if (_isNil(string) || string === "")
    return options?.defaultValue ? options?.defaultValue : 0;
  return parseInt(string);
}

// 천단위 구분
export function commaOfNumber(number) {
  if (number == undefined) return "";
  var string = "" + number; // 문자로 바꾸기.

  string = string.replace(/[^-+\.\d]/g, ""); // ±기호와 소수점, 숫자들만 남기고 전부 지우기.

  var regExp = /^([-+]?\d+)(\d{3})(\.\d+)?/; // 필요한 정규식.

  while (regExp.test(string))
    string = string.replace(regExp, "$1" + "," + "$2" + "$3"); // 쉼표 삽입.

  return string;
}

// 숫자 포맷
export function onlyNumber(value) {
  if (!value) return;
  return value.replace(/[^0-9]/gi, "");
}
// 아이디 정규식 3~15 자 이내 영문, 숫자
export function isId(asValue) {
  var regExp = /^[a-z0-9]{3,15}$/g;
  return regExp.test(asValue);
}
// 비밀번호 정규식 6~16자 이내 영문+숫자, 특수문자 조합 필수
export function isPassword(asValue) {
  // var regExp =
  //   /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{6,16}$/;
  var regExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+|?:{}])[A-Za-z\d~!@#$%^&*()_+|?:{}]{6,16}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
// 이메일 포멧
export function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return regExp.test(asValue);
}
//전화번호 포맷
export function phoneFormatter(value) {
  if (!value) {
    return "";
  }

  value = value.replace(/[^0-9]/g, "");

  let result = [];
  let restNumber = "";

  // 지역번호와 나머지 번호로 나누기
  if (value.startsWith("02")) {
    // 서울 02 지역번호
    result.push(value.substr(0, 2));
    restNumber = value.substring(2);
  } else if (value.startsWith("1")) {
    // 지역 번호가 없는 경우
    // 1xxx-yyyy
    restNumber = value;
  } else {
    // 나머지 3자리 지역번호
    // 0xx-yyyy-zzzz
    result.push(value.substr(0, 3));
    restNumber = value.substring(3);
  }

  if (restNumber.length === 7) {
    // 7자리만 남았을 때는 xxx-yyyy
    result.push(restNumber.substring(0, 3));
    result.push(restNumber.substring(3));
  } else {
    result.push(restNumber.substring(0, 4));
    result.push(restNumber.substring(4));
  }

  return result.filter((val) => val).join("-");
}

export function businessNumberFormatter(num, type) {
  var formatNum = "";

  if (type == 0) {
    formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-*****");
  } else {
    formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
  }

  return formatNum;
}

//날짜 순으로 오브젝트 정렬
export function sortingByDate(items, keyName) {
  let objectKeyName = keyName ? keyName : "created";
  const sortData = items?.sort(
    (a, b) => dayjs(b[objectKeyName]).unix() - dayjs(a[objectKeyName]).unix()
  );
  return sortData ? sortData : [];
}

//필터 초기값 세틸
export function setInitialFilterValue(query, isClean = true, isKeyType = true) {
  const clone = _.cloneDeep(query);
  if (isKeyType) {
    delete clone.keywordType;
    delete clone.keyword;
  }
  const filter = {
    page: query?.page || 0,
    size: query?.size || 20,
    sort: query?.sort || "id,DESC",
    ...clone,
  };
  if (isKeyType) filter[query?.keywordType] = query?.keyword;
  return isClean ? objectClean(filter) : filter;
}

//쿼리 데이트 포맷 세팅
export function setDefaultDateRange(
  data,
  dateGap,
  format,
  fromDateName,
  toDateName
) {
  //페이지가 마운트 될 때, 기본 날짜 간격 설정하여 검색 (값이 ''이면 전체로 판단)
  //dateGap 기본 날짜 간격은 현재 날짜에서 15일로 설정
  //초기 세팅 날짜가 정해져 있는 경우에 사용
  const gap = dateGap || 15;
  data[fromDateName || "fromDate"] =
    data?.fromDate || data?.fromDate === "" || data?.format === null
      ? data?.fromDate
      : dayjs()
          .subtract(gap, "day")
          .format(format || "YYYYMMDD");
  data[toDateName || "toDate"] =
    data?.toDate || data?.toDate === "" || data?.format === null
      ? data?.toDate
      : dayjs().format(format || "YYYYMMDD");
}

// 날짜 값 비교를 위해 사용(숫자값)
export function dateNumberFormat(date) {
  return Number(dayjs(date).format("YYYYMMDD"));
}

//데이트값 시간으로 변환
export function dateTimeFormat(date, isEnglish) {
  // 날짜 -> 시간으로 변환
  let hour = null,
    minute = null,
    timeType = null;

  if (!date) return;
  hour = dayjs(date).format("HH");
  minute = dayjs(date).format("mm");

  if (parseInt(hour) >= 12) {
    if (hour !== 12) {
      hour = hour - 12;
    }
    timeType = isEnglish ? "PM " : "오후 ";
  } else {
    timeType = isEnglish ? "AM " : "오전 ";
  }

  return timeType + hour + ":" + minute;
}

// 날짜 형태 변환
export function dayFormat(date, type) {
  return dayjs(date).format(type);
}

// 날짜 요일 변환
export function weekFormat(day) {
  let dayValue;
  if (typeof day === "number") {
    dayValue = day;
  } else {
    dayValue = dayjs(day).day();
  }
  switch (dayValue) {
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    case 7:
    case 0:
      return "일";
    default:
      break;
  }
}

// 날짜 몇번째 주 변환
export function weekStringbyDate(date) {
  if (!date) return;
  const weekValue = Math.floor(dayjs(date).date() / 7);
  switch (weekValue) {
    case 0:
      return "첫번째";
    case 1:
      return "두번째";
    case 2:
      return "세번째";
    case 3:
      return "네번째";
    case 4:
      return "다섯번째";
    case 5:
      return "여섯번째";
    default:
      break;
  }
}

export function isVideoFilename(filename) {
  if (!filename) return false;
  // 파일명에서 확장자 추출
  var extension = filename?.split(".").pop().toLowerCase();

  // 동영상 확장자 리스트
  var videoExtensions = ["mp4", "avi", "mov", "mkv", "wmv"];

  // 동영상 확장자인지 확인
  if (videoExtensions.indexOf(extension) !== -1) {
    return true; // 동영상 파일
  } else {
    return false; // 동영상 파일 아님
  }
}

export function getMemberAuthLabel() {
  return {
    GENERAL: "일반 멤버",
    LEADER: "모임장",
    MANAGER: "운영자",
  };
}

export function getDisplayOptions() {
  return [
    { label: "기", key: "GI", value: "GI" },
    { label: "회", key: "HOE", value: "HOE" },
    { label: "차", key: "CHA", value: "CHA" },
    { label: "대", key: "DAE", value: "DAE" },
  ];
}

//반복 옵션
export function getRepeatOptions(fromDate) {
  let date = fromDate || dayjs().format("YYYYMMDD");
  return [
    {
      value: "",
      label: "반복안함",
    },
    {
      value: "EVERY_DAY",
      label: "매일",
    },
    {
      value: "EVERY_WEEK",
      label: "매주",
    },
    {
      value: "EVERY_OTHER_WEEK",
      label: "격주",
    },
    {
      value: "EVERY_MONTH",
      label: `매월 ${dayjs(date).date()}일`,
    },
    {
      value: "EVERY_MONTH_WEEK_DAY",
      label: `매월 ${weekStringbyDate(date)} ${weekFormat(date)}요일`,
    },
    {
      value: "EVERY_YEAR",
      label: "매년",
    },
    {
      value: "INPUT",
      label: "직접설정",
    },
  ];
}

export function countImageFromString(string) {
  const regEx = /<(\/img|img|iframe)([^>]*)>/gi;
  let m = null;
  let count = 0;
  while ((m = regEx.exec(string))) {
    count += 1;
  }
  return count;
}

export const expressStatusText = {
  ACCEPT: "접수",
  // APPROVE: '승인',
  APPROVE: "-",
  CANCEL: "취소",
  COMPLETE: "완료",
  IN_PROGRESS: "진행중",
  REQUEST: "신청",
};

export const moimJoinStatusOptions = [
  { label: "완료", value: "COMPLETE" },
  { label: "중지", value: "HOLD" },
  { label: "초대중", value: "INVITE" },
  { label: "거절", value: "REJECT" },
  { label: "요청", value: "REQUEST" },
  { label: "완료", value: "UNREGIST" },
];

//텍스트 내부에 이미지 전부 삭제
export function removeImageFromText(text) {
  const regEx = /<(\/img|img|iframe)([^>]*)>/gi;
  return text?.replace(regEx, "");
}

// 카드번호 4글자 분할
export function addHyphensEvery4Chars(inputString) {
  // 정규 표현식을 사용하여 문자열을 4글자씩 분할
  var chunks = inputString.match(/.{1,4}/g);

  // 분할된 문자열을 "-"로 합치기
  var result = chunks.join("-");

  return result;
}

/**
 * 시간이 0000 로 들어올 때 사용
 * @param {string} time
 * @param {string} type // string || array
 * @returns
 */
export function getParseTime(time, type) {
  if (!time && type == "string") return "-";
  if (!time && type == "array") return [];
  const hh = Number(time.slice(0, 2));
  const mm = time.slice(2);
  if (type == "string") {
    // ex) 1900 --> 오후 7:00
    const newTime = `${
      hh == 0 ? "오전" : hh == 12 ? "오후" : hh < 13 ? "오전" : "오후"
    } ${hh == 0 || hh == 12 ? 12 : hh < 13 ? hh : hh - 12}:${mm}`;
    return newTime;
  } else {
    // ex) 1900 --> ['오후', '7', '00']
    const newArray = [
      hh == 0 ? "오전" : hh == 12 ? "오후" : hh < 13 ? "오전" : "오후",
      hh == 0 || hh == 12 ? "12" : hh < 13 ? `${hh}` : `${hh - 12}`,
      mm,
    ];
    return newArray;
  }
}

//오브젝트의 키값을 이름순으로 정렬
export function objectKeySort(object) {
  return Object.keys(object)
    .sort()
    .reduce((newObj, key) => {
      newObj[key] = object[key];
      return newObj;
    }, {});
}

export function getdateTimeGap(date) {
  // 현재 날짜와 해당 날짜의 차이
  const today = dayjs(new Date());
  const compareDate = dayjs(date);

  const dayGap = compareDate.diff(today, "day");
  const yearGap = compareDate.diff(today, "year");
  const monthGap = compareDate.diff(today, "month");
  const hourGap = compareDate.diff(today, "hour");

  if (dayGap === 0) {
    // 시간
    return `${hourGap}시간`;
  } else if (dayGap < 0) {
    // 지난 날
    return;
  } else if (dayGap > 31) {
    // 월
    if (monthGap < 12) {
      return `${monthGap}달`;
    } else {
      return `${yearGap}년`;
    }
  } else {
    // 일
    return `${dayGap}일`;
  }
}
//sql 날짜 포멧 변경
export function setSqlDateForm(rows, format) {
  return rows.map((row) => ({
    ...row,
    CREATED: dayjs(row?.CREATED).format(format || "YYYY-MM-DD hh:mm:ss"),
  }));
}
