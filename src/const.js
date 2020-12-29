export const members =  [
    // { code: '1', name: '旧めんば'  },
    { code: '2', name: '潮 紗理菜'  },
    // { code: '3', name: '旧めんば'  },
    { code: '4', name: '影山 優佳'  },
    { code: '5', name: '加藤 史帆'  },
    { code: '6', name: '齊藤 京子'  },
    { code: '7', name: '佐々木 久美'  },
    { code: '8', name: '佐々木 美玲'  },
    { code: '9', name: '高瀬 愛奈'  },
    { code: '10', name: '高本 彩花'  },
    { code: '11', name: '東村 芽依'  },
    { code: '12', name: '金村 美玖'  },
    { code: '13', name: '河田 陽菜'  },
    { code: '14', name: '小坂 菜緒'  },
    { code: '15', name: '富田 鈴花'  },
    { code: '16', name: '丹生 明里'  },
    { code: '17', name: '濱岸 ひより'  },
    { code: '18', name: '松田 好花'  },
    { code: '19', name: '宮田 愛萌'  },
    { code: '20', name: '渡邉 美穂'  },
    { code: '21', name: '上村 ひなの'  },
    { code: '22', name: '髙橋 未来虹'  },
    { code: '23', name: '森本 茉莉'  },
    { code: '24', name: '山口 陽世'  },
];


var startYear = 2016;
var thisYear = new Date().getFullYear();

export var years = new Array();
for (let $i = startYear; $i < thisYear + 1; $i++) {
    years.push(String($i));
}

export const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];