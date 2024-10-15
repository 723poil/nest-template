import * as fs from "fs";
import constants from "constants";
import { formatYmdHisKoOnlyNumber } from "./date.conversion";
import { isEmpty } from "class-validator";

export const fileUpload = () => {
  const getAccessibleDir = (resDir: string, domain: string, domainId: string, type: string): string => {
    const dir: string = `${resDir}${type}/${domain}/${domainId}/`;

    try {
      fs.accessSync(dir, constants.F_OK | constants.W_OK | constants.R_OK);
      return dir;
    } catch (err) {
      if (err.code === "EACCES") {
        return `${resDir}renew/${type}/${domain}/${domainId}/`;
      }
      return dir;
    }
  };

  const getDomainImageNm = (
    resDir: string,
    domain: string,
    domainId: string,
    subDomain: string = undefined,
  ): {
    dir: string;
    fileNm: string;
  } => {
    const dir: string = getAccessibleDir(resDir, domain, domainId, "image");

    return {
      dir: dir,
      fileNm: `${isEmpty(subDomain) ? domain : subDomain}_${formatYmdHisKoOnlyNumber()}.jpeg`,
    };
  };

  const mkdir = (dir: string): void => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  };

  const uploadDomainFile = (dir: string, fileNm: string, data: string | NodeJS.ArrayBufferView): boolean => {
    mkdir(dir); // 디렉토리 생성

    try {
      fs.writeFileSync(`${dir}${fileNm}`, data); // 파일 동기적으로 작성
      return true; // 성공 시 true 반환
    } catch (error) {
      return false; // 실패 시 false 반환
    }
  };

  const deleteResDir = (dir: string, resDir: string): string => {
    return dir.replace(`${resDir}`, "");
  };

  return {
    getAccessibleDir,
    getDomainImageNm,
    uploadDomainFile,
    deleteResDir,
  };
};
