const fetch = require('node-fetch'); // CommonJS 스타일로 가져옴

exports.handler = async () => {
  try {
    const response = await fetch(
      //'https://new.land.naver.com/api/articles/complex/25778?realEstateType=APT%3AABYG%3AJGC%3APRE&tradeType=&tag=%3A%3A%3A%3A%3A%3A%3A%3A&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page=2&complexNo=25778&buildingNos=&areaNos=&type=list&order=rank',
      'https://new.land.naver.com/api/articles/complex/113907?realEstateType=APT%3AABYG%3AJGC%3APRE&tradeType=&tag=%3A%3A%3A%3A%3A%3A%3A%3A&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page=2&complexNo=113907&buildingNos=&areaNos=&type=list&order=rank',
      {
        headers: {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9,ko;q=0.8',
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE3MzYyNTY1MzAsImV4cCI6MTczNjI2NzMzMH0.9kQyr3Z8yrnObhsKGYQ6jZbic8nn_VOsAHOvHZvM3Us',
          'cookie': 'NNB=BUMB2NHM5VCGE; ASID=afd184b40000017fe3666e7f00000059; _ga_451MFZ9CFM=GS1.1.1702637811.1.1.1702637869.0.0.0; _ga=GA1.2.2102003661.1648688658; _ga_EFBDNNF91G=GS1.1.1715641996.1.0.1715641999.0.0.0; NV_WETR_LAST_ACCESS_RGN_M="MDkxNDAxMDQ="; NV_WETR_LOCATION_RGN_M="MDkxNDAxMDQ="; nstore_session=8e1Z5YJ13X46z1X70jE9avjL; nstore_pagesession=izKsywqWnckUJssLEnG-342705; NAC=CSBlBQwUbNyH; nhn.realestate.article.rlet_type_cd=A01; nhn.realestate.article.trade_type_cd=""; nhn.realestate.article.ipaddress_city=1100000000; _fwb=180wY4L79zSK5tJ6Bl5M9Rc.1735656684418; landHomeFlashUseYn=Y; _fwb=180wY4L79zSK5tJ6Bl5M9Rc.1735656684418; nid_inf=254178657; NID_AUT=DF+r4qWFZZuSi6rzINAyWuowPTSghPzYe+Hz7XxO1P+ZhzxWZTdSRKfC8vIUmsiN; NID_JKL=AWCkQVacN+oItNBL4JuYlopfAyXJ5HWDXDsGH3CBd6k=; realestate.beta.lastclick.cortar=4100000000; NACT=1; page_uid=i3zxYwqo1fsssvGyuzRssssstHG-105036; NID_SES=AAABqdBbDFavml+aqwFkghvx1xr1lLdr6biceGLnEkrtTOXUWQ/Wh1j1YE5A96cD9+dwwcx4FUii6gryrZ5x/uLTIoMMGJrDsGKr99cEXVb3SAYenh2eqi/1FRaMXIdehiCFZVJZVFEnlLatEAnEMZ009HX3VFN0Rt3sRdHu0NNQgoIZE2cTUU7pvRDZpP/Wqrep7n7jQ/ViKf3JuujFG3xsz3JXi9qNOjXuhqWOs0aKt2UfwWGxq0FoaG08HQyqiG4AHnyS7vYesdnWYg0P0NVEcwdQg+Hs/DlFEXVGHinTlRHj3wmpopf2cAWrF7NmZLvhC1hkD8H68PJuji12egGhveOixCChgcDGOPDJLMjfl/PCxISi4hdJPVvfAiPgX69PP03NXLbJz368lKwgmmcGXFIZVz2D+XXNKa9cjFEFj4SrbFfMxoPGG0Nr0d1c2Uio4VIZsuUqlfXAZauXZedWqB2X1OWUzaKF19QlOvUaIACC4W2caaUkh6WhfU5UdQT5t4qbplhnogPqa3qxkR4TwwBY7BM3yY5MgDQFGPL3NpcacmJufDavVGkzIVW7DiB3rw==; REALESTATE=Tue%20Jan%2007%202025%2022%3A28%3A50%20GMT%2B0900%20(Korean%20Standard%20Time); BUC=BAoZOWk1GFZZmWBlTcxYA4le52gyMjAHNzNyCusd0kw=',
          'priority': 'u=1, i',
          'referer': 'https://new.land.naver.com/complexes/25778?ms=37.484312,126.998447,17&a=APT:ABYG:JGC:PRE&e=RETAIL',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        },
      }
    );

    /*
fetch('https://new.land.naver.com/api/articles/complex/113907?realEstateType=APT%3AABYG%3AJGC%3APRE&tradeType=&tag=%3A%3A%3A%3A%3A%3A%3A%3A&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page=2&complexNo=113907&buildingNos=&areaNos=&type=list&order=rank', {
  headers: {
  
    'accept-language': 'en-US,en;q=0.9,ko;q=0.8',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE3MzYyNjAwMTgsImV4cCI6MTczNjI3MDgxOH0.jGAqqXOTtJmvrTY1msUFeLCvBwVDnUAFXZNgYO3aYM4',
    'cookie': 'NNB=BUMB2NHM5VCGE; ASID=afd184b40000017fe3666e7f00000059; _ga_451MFZ9CFM=GS1.1.1702637811.1.1.1702637869.0.0.0; _ga=GA1.2.2102003661.1648688658; _ga_EFBDNNF91G=GS1.1.1715641996.1.0.1715641999.0.0.0; NV_WETR_LAST_ACCESS_RGN_M="MDkxNDAxMDQ="; NV_WETR_LOCATION_RGN_M="MDkxNDAxMDQ="; nstore_session=8e1Z5YJ13X46z1X70jE9avjL; nstore_pagesession=izKsywqWnckUJssLEnG-342705; NAC=CSBlBQwUbNyH; nhn.realestate.article.rlet_type_cd=A01; nhn.realestate.article.trade_type_cd=""; nhn.realestate.article.ipaddress_city=1100000000; _fwb=180wY4L79zSK5tJ6Bl5M9Rc.1735656684418; landHomeFlashUseYn=Y; _fwb=180wY4L79zSK5tJ6Bl5M9Rc.1735656684418; nid_inf=254178657; NID_AUT=DF+r4qWFZZuSi6rzINAyWuowPTSghPzYe+Hz7XxO1P+ZhzxWZTdSRKfC8vIUmsiN; NID_JKL=AWCkQVacN+oItNBL4JuYlopfAyXJ5HWDXDsGH3CBd6k=; realestate.beta.lastclick.cortar=4100000000; NACT=1; NID_SES=AAABqdBbDFavml+aqwFkghvx1xr1lLdr6biceGLnEkrtTOXUWQ/Wh1j1YE5A96cD9+dwwcx4FUii6gryrZ5x/uLTIoMMGJrDsGKr99cEXVb3SAYenh2eqi/1FRaMXIdehiCFZVJZVFEnlLatEAnEMZ009HX3VFN0Rt3sRdHu0NNQgoIZE2cTUU7pvRDZpP/Wqrep7n7jQ/ViKf3JuujFG3xsz3JXi9qNOjXuhqWOs0aKt2UfwWGxq0FoaG08HQyqiG4AHnyS7vYesdnWYg0P0NVEcwdQg+Hs/DlFEXVGHinTlRHj3wmpopf2cAWrF7NmZLvhC1hkD8H68PJuji12egGhveOixCChgcDGOPDJLMjfl/PCxISi4hdJPVvfAiPgX69PP03NXLbJz368lKwgmmcGXFIZVz2D+XXNKa9cjFEFj4SrbFfMxoPGG0Nr0d1c2Uio4VIZsuUqlfXAZauXZedWqB2X1OWUzaKF19QlOvUaIACC4W2caaUkh6WhfU5UdQT5t4qbplhnogPqa3qxkR4TwwBY7BM3yY5MgDQFGPL3NpcacmJufDavVGkzIVW7DiB3rw==; SRT30=1736259714; SRT5=1736259714; _naver_usersession_=nG7/G1PP2MTzsGGRcLFMwOaJ; page_uid=i30Hqwqo1LwssAw0ep0ssssst8N-181740; REALESTATE=Tue%20Jan%2007%202025%2023%3A26%3A58%20GMT%2B0900%20(Korean%20Standard%20Time); BUC=pY9RERzpNuzMlQHvjGOwRUlSB3qjbD-C6ned7wPKTmU=',
    'priority': 'u=1, i',
    'referer': 'https://new.land.naver.com/complexes/113907?ms=37.5579674,127.163402,17&a=APT:ABYG:JGC:PRE&e=RETAIL',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  }
});
    */
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};