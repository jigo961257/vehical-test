// import { sendInformation } from "./beta_test";

// const {sendInformation} = require("./beta_test");

const sendInformation = ({
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
    return requestOptions
}

// get the vechicle info which is in queue
 setTimeout(async () => {
    const reqObj  =  sendInformation({
        jkid: "18Z65",
        strXml: `<?xml version="1.0" encoding="GBK"?><root>   
        <QueryCondition>
        <jyjgbh>4300000039</jyjgbh> 
        <hphm>TEST1</hphm>
        <jcxdh></jcxdh> 
        <gwdh></gwdh> 
        </QueryCondition></root>`
    });

    const apiRes =  await fetch("http://localhost:8141/safe.asmx/queryObjectOutNew", reqObj)
    .then(async (response) => {
        return {
            status: true,
            data: await response.text(),
            error: null
        }
    })
    .catch((error) => {
        return {
            status: false,
            data: null,
            error: error
        }
    });

    console.dir(apiRes, Infinity)

}, 3000);

// step 2
//  setTimeout(async () => {
//     const reqObj  =  sendInformation({
//         jkid: "18C55",
//         strXml: `<?xml version="1.0" encoding="GBK"?><root>
//         <vehispara>
//         <jylsh>GJ362023090500001</jylsh>
//         <jyjgbh>4300000039</jyjgbh>
//         <jcxdh>1</jcxdh>
//         <jycs>1</jycs>
//         <hpzl>LGV</hpzl>
//         <hphm>TEST5</hphm>
//         <clsbdh>123456</clsbdh>
//         <gwjysbbh>5</gwjysbbh>
//         <jyxm>LA</jyxm>
//         <kssj>2024-06-22 12:04:59</kssj>
//         <jyy></jyy>
//         <sbdh>1</sbdh>
//         </vehispara></root>`
//     });

//     const apiRes =  await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//     .then(async (response) => {
//         return {
//             status: true,
//             data: await response.text(),
//             error: null
//         }
//     })
//     .catch((error) => {
//         return {
//             status: false,
//             data: null,
//             error: error
//         }
//     });

//     console.dir(apiRes, Infinity)

// }, 3000);

// registariton the vehicle for inspect query 18C51 working
// setTimeout(async () => {
//     const reqObj  =  sendInformation({
//         jkid: "18C51",
//         strXml: `<?xml version="1.0" encoding="GBK"?>
//         <root>
//         <vehispara>
//         <jylsh>GJ032024062500008</jylsh>
//         <jyjgbh>4300000039</jyjgbh>
//         <jcxdh></jcxdh>
//         <xh></xh>
//         <hpzl>02</hpzl>
//         <hphm>GJ04AA1234</hphm>
//         <clsbdh>123456</clsbdh>
//         <fdjh>1234</fdjh>
//         <dpxh></dpxh>
//         <csys>A</csys>
//         <syxz>P</syxz>
//         <ccdjrq></ccdjrq>
//         <jyrq></jyrq>
//         <jyyxqz></jyyxqz>
//         <bxzzrq></bxzzrq>
//         <rlzl>A</rlzl>
//         <gl></gl>
//         <zs>2</zs>
//         <zj>4</zj>
//         <qlj></qlj>
//         <hlj></hlj>
//         <zzl>1689</zzl>
//         <zbzl></zbzl>
//         <ccrq>2024-06-25</ccrq>
//         <qdxs></qdxs>
//         <zczs>1</zczs>
//         <zczw>1</zczw>
//         <zzs></zzs>
//         <zzly></zzly>
//         <qzdz></qzdz>
//         <ygddtz></ygddtz>
//         <zxzxjxs></zxzxjxs>
//         <lcbds></lcbds>
//         <jyxm>LA</jyxm>
//         <jylb>1</jylb>
//         <dlsj>2024-06-25 20:45:23</dlsj>
//         <jycs>1</jycs>
//         <dly>ADMIN</dly>
//         <ycy></ycy>
//         <clpp1>TOYTO</clpp1>
//         <clxh>ISVO</clxh>
//         <syr>jigo goyani2</syr>
//         <zsdz>jigo address</zsdz>
//         <cllx>M1</cllx>
//         <cwkc></cwkc>
//         <cwkk></cwkk>
//         <cwkg></cwkg>
//         <clyt>P</clyt>
//         <ytsx>3</ytsx>
//         <jcxlb>1</jcxlb>
//         <sjr></sjr>
//         <qzs></qzs>
//         <zws></zws>
//         </vehispara>
//         </root>`
//     });

//     const apiRes =  await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//     .then(async (response) => {
//         return {
//             status: true,
//             data: await response.text(),
//             error: null
//         }
//     })
//     .catch((error) => {
//         return {
//             status: false,
//             data: null,
//             error: error
//         }
//     });

//     console.dir(apiRes, Infinity)

// }, 3000);

// on-line dispetch 18Z64 working
// setTimeout(async () => {
//     const reqObj  =  sendInformation({
//         jkid: "18Z64",
//         strXml: `<?xml version="1.0" encoding="GBK"?>
//         <root>
//         <vehispara>
//         <jylsh>GJ032024062500008</jylsh>
//         <jcxdh>2</jcxdh>
//         <ycy>-</ycy>
//         <gwdh></gwdh>
//         </vehispara>
//         </root>`
//     });

//     const apiRes =  await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//     .then(async (response) => {
//         return {
//             status: true,
//             data: await response.text(),
//             error: null
//         }
//     })
//     .catch((error) => {
//         return {
//             status: false,
//             data: null,
//             error: error
//         }
//     });

//     console.dir(apiRes, Infinity)

// }, 3000);


// 18C65- Registration of Re-inspection
// setTimeout(async () => {
//     const reqObj  =  sendInformation({
//         jkid: "18C65",
//         strXml: `<?xml version="1.0" encoding="GBK"?>
//         <root>
//         <vehispara>
//         <jylsh>GJ032024062500004</jylsh>
//         <jyjgbh>4300000039</jyjgbh>
//         <jcxdh>2</jcxdh>
//         <hpzl></hpzl>
//         <hphm></hphm>
//         <clsbdh>1234</clsbdh>
//         <fjx>LA</fjx>
//         <fjdlsj>2024-06-26</fjdlsj>
//         <jycs>2024-06-26</jycs>
//         <dly></dly>
//         <ycy></ycy>
//         </vehispara>
//         </root>`
//     });

//     const apiRes =  await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//     .then(async (response) => {
//         return {
//             status: true,
//             data: await response.text(),
//             error: null
//         }
//     })
//     .catch((error) => {
//         return {
//             status: false,
//             data: null,
//             error: error
//         }
//     });

//     console.dir(apiRes, Infinity)

// }, 3000);


// rejection query
// setTimeout(async () => {
//     const reqObj  =  sendInformation({
//         jkid: "18C72",
//         strXml: `<?xml version="1.0" encoding="GBK"?>
//         <root>
//         <vehispara>
//         <jylsh>GJ032024062500008</jylsh>
//         <jyjgbh>GJ032024062500008</jyjgbh>
//         <hpzl>02</hpzl>
//         <hphm>GJ04AA1234</hphm>
//         </vehispara>
//         </root>`
//     });

//     const apiRes =  await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//     .then(async (response) => {
//         return {
//             status: true,
//             data: await response.text(),
//             error: null
//         }
//     })
//     .catch((error) => {
//         return {
//             status: false,
//             data: null,
//             error: error
//         }
//     });

//     console.dir(apiRes, Infinity)

// }, 3000);

// write for the inspex
// setTimeout(async () => {
//     const reqObj = sendInformation({
//         jkid: "18C52",
//         strXml: `<?xml version="1.0" encoding="GBK"?>
//             <root>
//             <WriteObjectOutNew>
//             <vehispara>
//             <jylsh>GJ04AA1257SERIAL</jylsh>
//             <jyjgbh>4300000039</jyjgbh>
//             <jcxdh>2</jcxdh>
//             <hphm>GJ04AA1257</hphm>
//             <clsbdh>1234</clsbdh>
//             <jycs>2024-06-25T15:48:00.918Z</jycs>
//             <kssj>2024-06-25T15:40:00.918Z</kssj>
//             </vehispara>
//             </WriteObjectOutNew>
//             </root>`
//     });

//     const apiRes = await fetch("http://localhost:8141/safe.asmx/writeObjectOutNew", reqObj)
//         .then(async (response) => {
//             return {
//                 status: true,
//                 data: await response.text(),
//                 error: null
//             }
//         })
//         .catch((error) => {
//             return {
//                 status: false,
//                 data: null,
//                 error: error
//             }
//         });

//     console.dir(apiRes, Infinity)

// }, 3000);