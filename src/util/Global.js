import _ from "lodash";

// 오브젝트 null 삭제
export function objectClean(object) {
  for (var propName in object) {
    if (
      object[propName] === null ||
      object[propName] === undefined ||
      object[propName] === ""
    ) {
      delete object[propName];
    }
  }
  return object;
}

// objectClean은 object안의 객체는 처리해주지 못함 (objectClean보다 더 강력함)
export function removeEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map((v) => (v && typeof v === "object" ? removeEmpty(v) : v))
      .filter((v) => !(v == null || v === ""));
  } else {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && typeof v === "object" ? removeEmpty(v) : v])
      .reduce((a, [k, v]) => (v == null || v === "" ? a : ((a[k] = v), a)), {});
  }
}

// 리스트 호출시 필요한 파라미터 만들기(dateRange,adress 값 변환, null 값 삭제)
export function getSearchParams(params) {
  for (let key in params) {
    if (key == "dateRange") {
      params.fromDate = params[key] && params[key][0].format("YYYYMMDD");
      params.toDate = params[key] && params[key][1].format("YYYYMMDD");
      delete params[key];
    }
    if (key == "address") {
      params.addrSido = params[key] && params[key][0];
      params.addrSigugun = params[key] && params[key][1];
      params.addrUpmeandong = params[key] && params[key][2];
      delete params[key];
    }
    if (key == "keyword") {
      params[params.keywordType] = params.keyword;
      delete params.keywordType;
      delete params.keyword;
    }
  }
  return params;
}

// 리스트 호출시 필요한 파라미터 만들기 adress 값 변환
export function setAddrParam(params) {
  for (let key in params) {
    if (key == "address") {
      params.addrSido = params[key] && params[key][0];
      params.addrSigugun = params[key] && params[key][1];
      params.addrUpmeandong = params[key] && params[key][2];
      delete params[key];
    }
  }
  return params;
}

// 차량번호 정규식
export function carNumberRegExp(value) {
  return /\d{2,3}[가-힣]{1}\d{4}/gm.test(value) ? true : false;
}

// value 값 null check
export function isEmpty(value) {
  if (value != null && typeof value == "object") {
    for (var propName in value) {
      if (
        value[propName] === null ||
        value[propName] === undefined ||
        value[propName] === ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (value == "" || value == null || value == undefined) {
    return true;
  } else {
    return false;
  }
}

export function limitText(text, max) {
  return text.substr(0, max) + "...";
}

// 이미지 업로드 정규식
export function imgRegExp(file, notiMessage) {
  if (!file.id && file.size > 10 * 1024 * 1024) {
    notiMessage(`${file.name}는 10MB를 초과 합니다.(10MB 이하만 업로드 가능)`);
    return true;
  } else if (!file.id && !/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(file.name)) {
    notiMessage(`${file.name}는 이미지 형식의 파일이 아닙니다.`);
    return true;
  } else {
    return false;
  }
}

//필수 값 체크, 비필수값은 exceptKeys에 배열로 넣어주면됨
export function checkRequiredValue(value, exceptKeys, errorText) {
  let pathKeys = exceptKeys || [];
  if (typeof value !== "object") return;
  const errors = [];
  for (let key in value) {
    if (
      (value?.[key] === null ||
        value?.[key] === undefined ||
        value?.[key] === "") &&
      !pathKeys.includes(key)
    ) {
      errors.push(key);
    }
  }

  return errors;
}

// base64 변환을 위함
export async function dataUrlToFile(dataUrl, fileName) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], fileName, { type: "image/png" });
}

//배열에 빈값 확인
export function checkEmptyArray(array, pathKeys = []) {
  const errors = [];
  array.forEach((value) => {
    let obj = [];
    for (let key in value) {
      if (
        (value?.[key] === null ||
          value?.[key] === undefined ||
          value?.[key] === "") &&
        !pathKeys.includes(key)
      ) {
        obj.push(key);
      }
    }
    if (obj?.[0]) errors.push(obj);
  });
  return errors;
}

// 랜덤 정수 가져오기
export function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// iframe 을 video 로 전환
export function getContents(content) {
  const replaceContent = content
    ?.replace(
      /\<iframe src\=\"\/assets\/customVideo\.html\?src\=/gi,
      '</div><video width="100%" height="100%" controls src="'
    )
    ?.replaceAll(/\<\/iframe\>/gi, "</video>");
  return replaceContent;
}
