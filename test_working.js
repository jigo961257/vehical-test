console.log("file read success!");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// 

const urlencoded = new URLSearchParams();
urlencoded.append("xtlb", "18");
urlencoded.append("jkxlh", "");
urlencoded.append("jkid", "18C49");
urlencoded.append("cjsqbh", "");
urlencoded.append("dwjgdm", "");
urlencoded.append("dwmc", "");
urlencoded.append("yhbz", "");
urlencoded.append("yhxm", "");
urlencoded.append("zdbs", "");
urlencoded.append("strXml", "<?xml version=\"1.0\" encoding=\"GBK\"?>\n<root>\n   <querycondition>\n      <hphm>TEST2</hphm>\n      <hpzl>02</hpzl>\n      <clsbdh>1234</clsbdh>\n      <jyjgbh>1234</jyjgbh>\n   </querycondition>\n</root>");

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