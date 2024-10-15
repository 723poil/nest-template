import { isEmpty } from "class-validator";

export const formatYmdHisKo = (date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  const year: string = date.toLocaleString("ko-KR", {
    year: "numeric",
    timeZone: "Asia/Seoul",
  });

  const month: string = date.toLocaleString("ko-KR", {
    month: "numeric",
    timeZone: "Asia/Seoul",
  });

  const day: string = date.toLocaleString("ko-KR", {
    day: "numeric",
    timeZone: "Asia/Seoul",
  });

  const hour: string = date.toLocaleString("ko-KR", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul",
  });

  const minute: string = date.toLocaleString("ko-KR", {
    minute: "numeric",
    timeZone: "Asia/Seoul",
  });

  const second: string = date.toLocaleString("ko-KR", {
    second: "numeric",
    timeZone: "Asia/Seoul",
  });

  return [
    [year.replace(/[년]/g, "") + "년 ", month.replace(/[월]/g, "") + "월 ", day.replace(/[일]/g, "") + "일 "].join(""),
    [hour.replace(/[시]/g, "") + "시 ", minute + "분 ", second + "초"].join(""),
  ].join("");
};

export const formatYmdHisKoOnlyNumber = (date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  return parseDate(date)
    .join("")
    .replaceAll(" ", "")
    .replace(/[년월일시]/g, "");
};

export const convertToTimeStamp = (dateDtmString: string): Date => {
  return new Date(dateDtmString + " GMT+0900");
};

export const formatDtm = (date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  const [year, month, day, hour, minute, second] = parseDate(date);

  return [[year, month, day].join("-"), [hour, minute, second].join(":")].join(" ").replace(/[년월일시]/g, "");
};

export const formatDt = (date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  const [year, month, day] = parseDate(date);

  return [year, month, day].join("-").replace(/[년월일]/g, "");
};

export const formatYmdHisSSS = (date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  const [year, month, day, hour, minute, second] = parseDate(date);

  return [year, month, day, hour, minute, second, String(date.getMilliseconds()).padStart(3, "0")]
    .join("")
    .replaceAll(" ", "")
    .replace(/[년월일시]/g, "");
};

function parseDate(date: Date): string[] {
  const year: string = date.toLocaleString("ko-KR", {
    year: "numeric",
    timeZone: "Asia/Seoul",
  });

  const month: string = date.toLocaleString("ko-KR", {
    month: "2-digit",
    timeZone: "Asia/Seoul",
  });

  const day: string = date.toLocaleString("ko-KR", {
    day: "2-digit",
    timeZone: "Asia/Seoul",
  });

  const hour: string = date.toLocaleString("ko-KR", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul",
  });

  const minute: string = date
    .toLocaleString("ko-KR", {
      minute: "2-digit",
      timeZone: "Asia/Seoul",
    })
    .padStart(2, "0");

  const second: string = date
    .toLocaleString("ko-KR", {
      second: "2-digit",
      timeZone: "Asia/Seoul",
    })
    .padStart(2, "0");

  return [year, month, day, hour, minute, second];
}

export const addMonthsToDt = (months: number, date: Date = new Date()): string => {
  if (typeof date === "string") {
    return date;
  }

  if (isEmpty(date)) {
    return "";
  }

  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);

  return formatDt(newDate);
};
