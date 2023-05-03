import {
	ElMessage,
	ElLoading
} from 'element-plus'


//时间展示
var date = new Date()
var month = date.getMonth() + 1
var day = date.getDate()

//星期几
const getWeek = () => {
	let week = ''
	switch (date.getDay()) {
		case 0:
			week = '星期天'
			break;
		case 1:
			week = '星期一'
			break;
		case 2:
			week = '星期二'
			break;
		case 3:
			week = '星期三'
			break;
		case 4:
			week = '星期四'
			break;
		case 5:
			week = '星期五'
			break;
		case 6:
			week = '星期六'
			break;
	}
	return week
}

//当前年第几周
const getYearWeek = (date) => {
	//本年的第一天
	let beginDate = new Date(date.getFullYear(), 0, 1);
	//星期从0-6,0代表星期天，6代表星期六
	let endWeek = date.getDay();
	if (endWeek == 0) endWeek = 7;
	let beginWeek = beginDate.getDay();
	if (beginWeek == 0) beginWeek = 7;
	//计算两个日期的天数差
	let millisDiff = date.getTime() - beginDate.getTime();
	let dayDiff = Math.floor((millisDiff + (beginWeek - endWeek) * (24 * 60 * 60 * 1000)) / 86400000);
	return Math.ceil(dayDiff / 7)
	// return Math.ceil(dayDiff / 7) + 1;
}


const utils = {
	//年
	Year: date.getFullYear(),
	//月
	Month: month < 10 ? '0' + month : month,
	//日
	Day: day < 10 ? '0' + day : day,
	//周几
	Week: getWeek(),
	//当前年第几周
	YearWeek: getYearWeek(date),

	// 加载动画
	loadding: null,

	showLoadding(msg) {
		if (utils.loadding) {
			return
		}
		utils.loadding = ElLoading.service({
			fullscreen: true,
			body: true,
			text: msg ? msg : 'Loading...',
		})
		return utils.loadding
	},
	hideLoadding() {
		utils.loadding && utils.loadding.close()
		utils.loadding = null
	},

	// 消息提示

	/* 成功提示样式 */
	showSuccess(msg) {
		return ElMessage({
			grouping: true,
			message: msg,
			type: 'success',
		})
	},
	/* 报错提示样式 */
	showError(msg) {
		return ElMessage({
			grouping: true,
			message: msg,
			type: 'error',
		})
	},
	/* 警告提示样式 */
	showWarning(msg) {
		return ElMessage({
			grouping: true,
			message: msg,
			type: 'warning',
		})
	},
	/* 默认提示样式 */
	showDefault(msg) {
		return ElMessage({
			grouping: true,
			message: msg,
			type: 'info',
		})
	}
}
export default utils