export function formatSchedule(item, clubids) {
    if (inArray(item.club_id, clubids)) {
        item.is_club_member = true
        if (item.sub_type != 1)
            item.show_tag = '会员'
        else
            item.show_tag = `公开课:￥${item.price}`
    } else {
        item.is_club_member = false
        switch (item.sub_type) {
        case 0:
            item.show_tag = '会员'
            break
        case 1:
            item.show_tag = `公开课:￥${item.price}`
            break
        case 2:
            item.show_tag = `体验课:￥${item.price}`
            break
        case 3:
            item.show_tag = `空闲课:￥${item.price}`
            break
        }
    }
    return item
}



export function getThumb(src, size) {
  size = `_${size}`
  return src.replace(/(\.[^\.]+)$/, size + '$1')
}

 

 

export function dayOfWeek(date) {
  return '日一二三四五六'.split('')[date.getDay()]
}

 

 





export function inArray(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return true
        }
    }
    return false
}

export function dealDate(year, month, day) {
    if (day < 10)
        day = '0' + day
    if (month < 10)
        month = '0' + month
    return year + '-' + month + '-' + day
}

export function buling(num) {
    if (num < 10)
        num = '0' + num
    return num
}

// export function dealDate(date) {
//     if (date < 10)
//         date = '0' + date
//     const now = new Date()
//     const cur_year = now.getFullYear()
//     let cur_month = now.getMonth() + 1
//     if (cur_month < 10)
//         cur_month = '0' + cur_month
//     date = cur_year + '-' + cur_month + '-' + date
//     return date
// }

export function formatTime(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    }
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    return fmt
}

export function setSlider(tabLength, windowWidth, sliderWidth, activeIndex) {
    let sliderLeft = (windowWidth / tabLength - sliderWidth) / 2
    let sliderOffset = windowWidth / tabLength * activeIndex
    return {
        sliderLeft,
        sliderOffset
    }
}

export function countdown(that, count) {
    var second = that.second
    if (second == 0) {
        that.second = count
        that.is_getting = false
        that.$apply()
        return
    }
    that.timer = setTimeout(function() {
        that.second = second - 1
        that.$apply()
        countdown(that, count)
    }, 1000)
}

export function checkPhone(phone) {
    if (!(/^1[34578]\d{9}$/.test(phone)))
        return false
    else
        return true
}

// 获取当月共多少天
export function getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
}

// 获取当月第一天星期几
export function getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
}

// 获取当月第一天星期几
export function getLastDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month, 0)).getDay();
}

export function day() {
    return formatTime(new Date(), 'yyyy-MM-dd');
}

//获取当前日期前后n天的日期
export function getDateAfterDays(date, days) {
    let date2 = new Date(date)
    date2.setDate(date.getDate() + days)
    return formatTime(date2, 'yyyy-MM-dd')
}

//emoji解析
export function emojiAnalysis(arr, type = "load") {
    //arr: 传入的消息数组
    //type：消息解析类型，参数：load（读取消息），input（输入消息）

    // emoji对象
    let __emojiObjs = {
        '微笑': 'qqface0',
        '撇嘴': 'qqface1',
        '色': 'qqface2',
        '发呆': 'qqface3',
        '得意': 'qqface4',
        '流泪': 'qqface5',
        '害羞': 'qqface6',
        '闭嘴': 'qqface7',
        '睡': 'qqface8',
        '大哭': 'qqface9',
        '尴尬': 'qqface10',
        '发怒': 'qqface11',
        '调皮': 'qqface12',
        '呲牙': 'qqface13',
        '惊讶': 'qqface14',
        '难过': 'qqface15',
        '酷': 'qqface16',
        '冷汗': 'qqface17',
        '抓狂': 'qqface18',
        '吐': 'qqface19',
        '偷笑': 'qqface20',
        '愉快': 'qqface21',
        '白眼': 'qqface22',
        '傲慢': 'qqface23',
        '饥饿': 'qqface24',
        '困': 'qqface25',
        '惊恐': 'qqface26',
        '流汗': 'qqface27',
        '憨笑': 'qqface28',
        '悠闲': 'qqface29',
        '奋斗': 'qqface30',
        '咒骂': 'qqface31',
        '疑问': 'qqface32',
        '嘘': 'qqface33',
        '晕': 'qqface34',
        '疯了': 'qqface35',
        '衰': 'qqface36',
        '骷髅': 'qqface37',
        '敲打': 'qqface38',
        '再见': 'qqface39',
        '擦汗': 'qqface40',
        '抠鼻': 'qqface41',
        '鼓掌': 'qqface42',
        '糗大了': 'qqface43',
        '坏笑': 'qqface44',
        '左哼哼': 'qqface45',
        '右哼哼': 'qqface46',
        '哈欠': 'qqface47',
        '鄙视': 'qqface48',
        '委屈': 'qqface49',
        '快哭了': 'qqface50',
        '阴险': 'qqface51',
        '亲亲': 'qqface52',
        '吓': 'qqface53',
        '可怜': 'qqface54',
        '菜刀': 'qqface55',
        '西瓜': 'qqface56',
        '啤酒': 'qqface57',
        '篮球': 'qqface58',
        '乒乓': 'qqface59',
        '咖啡': 'qqface60',
        '饭': 'qqface61',
        '猪头': 'qqface62',
        '玫瑰': 'qqface63',
        '凋谢': 'qqface64',
        '嘴唇': 'qqface65',
        '爱心': 'qqface66',
        '心碎': 'qqface67',
        '蛋糕': 'qqface68',
        '闪电': 'qqface69',
        '炸弹': 'qqface70',
        '刀': 'qqface71',
        '足球': 'qqface72',
        '瓢虫': 'qqface73',
        '便便': 'qqface74',
        '月亮': 'qqface75',
        '太阳': 'qqface76',
        '礼物': 'qqface77',
        '拥抱': 'qqface78',
        '强': 'qqface79',
        '弱': 'qqface80',
        '握手': 'qqface81',
        '胜利': 'qqface82',
        '抱拳': 'qqface83',
        '勾引': 'qqface84',
        '拳头': 'qqface85',
        '差劲': 'qqface86',
        '爱你': 'qqface87',
        'NO': 'qqface88',
        'OK': 'qqface89',
        '爱情': 'qqface90',
        '飞吻': 'qqface91',
        '跳跳': 'qqface92',
        '发抖': 'qqface93',
        '怄火': 'qqface94',
        '转圈': 'qqface95',
        '磕头': 'qqface96',
        '回头': 'qqface97',
        '跳绳': 'qqface98',
        '投降': 'qqface99',
        '激动': 'qqface100',
        '乱舞': 'qqface101',
        '献吻': 'qqface102',
        '左太极': 'qqface103',
        '右太极': 'qqface104',
        '微笑': 'qqface0',
        '撇嘴': 'qqface1',
        '色': 'qqface2',
        '發呆': 'qqface3',
        '得意': 'qqface4',
        '流淚': 'qqface5',
        '害羞': 'qqface6',
        '閉嘴': 'qqface7',
        '睡': 'qqface8',
        '大哭': 'qqface9',
        '尷尬': 'qqface10',
        '發怒': 'qqface11',
        '調皮': 'qqface12',
        '呲牙': 'qqface13',
        '驚訝': 'qqface14',
        '難過': 'qqface15',
        '酷': 'qqface16',
        '冷汗': 'qqface17',
        '抓狂': 'qqface18',
        '吐': 'qqface19',
        '偷笑': 'qqface20',
        '愉快': 'qqface21',
        '白眼': 'qqface22',
        '傲慢': 'qqface23',
        '饑餓': 'qqface24',
        '困': 'qqface25',
        '驚恐': 'qqface26',
        '流汗': 'qqface27',
        '憨笑': 'qqface28',
        '悠閑': 'qqface29',
        '奮鬥': 'qqface30',
        '咒罵': 'qqface31',
        '疑問': 'qqface32',
        '噓': 'qqface33',
        '暈': 'qqface34',
        '瘋了': 'qqface35',
        '衰': 'qqface36',
        '骷髏': 'qqface37',
        '敲打': 'qqface38',
        '再見': 'qqface39',
        '擦汗': 'qqface40',
        '摳鼻': 'qqface41',
        '鼓掌': 'qqface42',
        '糗大了': 'qqface43',
        '壞笑': 'qqface44',
        '左哼哼': 'qqface45',
        '右哼哼': 'qqface46',
        '哈欠': 'qqface47',
        '鄙視': 'qqface48',
        '委屈': 'qqface49',
        '快哭了': 'qqface50',
        '陰險': 'qqface51',
        '親親': 'qqface52',
        '嚇': 'qqface53',
        '可憐': 'qqface54',
        '菜刀': 'qqface55',
        '西瓜': 'qqface56',
        '啤酒': 'qqface57',
        '籃球': 'qqface58',
        '乒乓': 'qqface59',
        '咖啡': 'qqface60',
        '飯': 'qqface61',
        '豬頭': 'qqface62',
        '玫瑰': 'qqface63',
        '雕謝': 'qqface64',
        '嘴唇': 'qqface65',
        '愛心': 'qqface66',
        '心碎': 'qqface67',
        '蛋糕': 'qqface68',
        '閃電': 'qqface69',
        '炸彈': 'qqface70',
        '刀': 'qqface71',
        '足球': 'qqface72',
        '瓢蟲': 'qqface73',
        '便便': 'qqface74',
        '月亮': 'qqface75',
        '太陽': 'qqface76',
        '禮物': 'qqface77',
        '擁抱': 'qqface78',
        '強': 'qqface79',
        '弱': 'qqface80',
        '握手': 'qqface81',
        '勝利': 'qqface82',
        '抱拳': 'qqface83',
        '勾引': 'qqface84',
        '拳頭': 'qqface85',
        '差勁': 'qqface86',
        '愛妳': 'qqface87',
        'NO': 'qqface88',
        'OK': 'qqface89',
        '愛情': 'qqface90',
        '飛吻': 'qqface91',
        '跳跳': 'qqface92',
        '發抖': 'qqface93',
        '慪火': 'qqface94',
        '轉圈': 'qqface95',
        '磕頭': 'qqface96',
        '回頭': 'qqface97',
        '跳繩': 'qqface98',
        '投降': 'qqface99',
        '激動': 'qqface100',
        '亂舞': 'qqface101',
        '獻吻': 'qqface102',
        '左太極': 'qqface103',
        '右太極': 'qqface104'
    };

    let objList = [];

    for (let i = 0; i < arr.length; i++) {
        // if (type === 'load') {
        objList.push(preData(arr[i]));
    // }
    }
    return objList;
    // 解析字符串 创建对象 储存 分解后的 字符串，把 ‘表情代码’ 和 ‘文本’ 分解
    function preData(str) {
        // 提取表情编号 的 正则
        let reg = new RegExp(/[\'\[]?([^\[\[\]\]]*)[\'\]]?/i);
        let arr = str.split(reg);

        let emojiObj; // 分解后的 对象
        let emojiObjList = []; // 分解后对象的集合----数组形式 
        for (let i = 0; i < arr.length; i++) {
            let ele = arr[i];
            emojiObj = {};
            if (__emojiObjs[ele]) {
                emojiObj.tag = "emoji";
                emojiObj.node = 'element';
                emojiObj.baseClass = "face";
                emojiObj.txt = __emojiObjs[ele];
            } else {
                emojiObj.node = 'text';
                emojiObj.txt = ele;
            }
            emojiObjList.push(emojiObj);
        }
        return emojiObjList;
    }
}
