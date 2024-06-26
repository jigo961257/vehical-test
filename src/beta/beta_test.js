

export const sendInformation = async ({
    jkid,
    strXml,
    xtlb = "18",
}) => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// 

const urlencoded = new URLSearchParams();
urlencoded.append("xtlb", xtlb);
urlencoded.append("jkxlh", "");
urlencoded.append("jkid", jkid);
urlencoded.append("cjsqbh", "");
urlencoded.append("dwjgdm", "");
urlencoded.append("dwmc", "");
urlencoded.append("yhbz", "");
urlencoded.append("yhxm", "");
urlencoded.append("zdbs", "");
urlencoded.append("strXml", strXml);

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
};

const apiRes =  await fetch("http://localhost:8141/safe.asmx/queryObjectOutNew", requestOptions)
    .then((response) => response.text())
    .catch((error) => {
        return {
            status: false,
            data: null,
            error:error
        }
    });

    const filterResult = typeof apiRes === "string" ? JSON.parse(apiRes) : apiRes
    return filterResult
}