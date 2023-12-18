//bigint 타입 데이터를 json으로 가공
export function bigIntToString(bigInt) {
  return JSON.parse(
    JSON.stringify(bigInt, (key, value) =>
      typeof value === "bigint" ? Number(value.toString()) : value
    )
  );
}

//오브젝트를 insert value 에 맞게 전환 (빈값 null 세팅)
//WARNING : 오브젝트 순서에 주의
export function objectToSqlValue(object) {
  let values = [];
  for (let key in object) {
    if (!!object?.[key]) values.push(`'${object[key]}'`);
    else if (key === "CREATED") values.push("now()");
    else values.push("NULL");
  }
  return values.join(", ");
}
