console.log("file read success!");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// 

const urlencoded = new URLSearchParams();
urlencoded.append("xtlb", "18");
urlencoded.append("jkxlh", "");
urlencoded.append("jkid", "18Z65");
urlencoded.append("cjsqbh", "");
urlencoded.append("dwjgdm", "");
urlencoded.append("dwmc", "");
urlencoded.append("yhbz", "");
urlencoded.append("yhxm", "");
urlencoded.append("zdbs", "");
urlencoded.append("strXml", "<?xml version=\"1.0\" encoding=\"GBK\"?>\n<root>\n   <querycondition>\n      <hphm>GJ01KN3938</hphm>\n      <hpzl>04</hpzl>\n      <clsbdh>45812</clsbdh>\n      <jyjgbh>4300000039</jyjgbh>\n   </querycondition>\n</root>");

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
};

fetch("http://localhost:8141/safe.asmx/queryObjectOutNew", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));