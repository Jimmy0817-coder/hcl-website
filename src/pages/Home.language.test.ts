import { describe, expect, it } from "vitest";
import { languageCopy, localizedNewsTitle } from "./Home";

describe("HCL language mode", () => {
  it("provides separate navigation labels for Chinese and English", () => {
    expect(languageCopy.zh.nav[0]?.[0]).toBe("服務範疇");
    expect(languageCopy.en.nav[0]?.[0]).toBe("Services");
    expect(languageCopy.zh.nav[0]?.[0]).not.toBe(languageCopy.en.nav[0]?.[0]);
  });

  it("localizes a Chinese source news title into one language at a time", () => {
    const record = {
      date: "2018-07-11",
      year: "2018",
      memberName: "Dr. Tommy Ho",
      memberNameZh: "何忠明博士",
      qualification: "FIET",
      sourceUrl: "https://www.hcl.hk/",
      originalTitle: "何忠明博士獲得工程及科技學會院士資格",
    };

    expect(localizedNewsTitle(record, "zh")).toContain("何忠明博士");
    expect(localizedNewsTitle(record, "en")).toContain("Congratulations");
    expect(localizedNewsTitle(record, "en")).not.toContain("何忠明博士");
  });
});
