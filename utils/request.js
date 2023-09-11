// 发送 ajax 请求
// 封装功能函数
// 	功能点明确
// 	函数内部应该保留固定代码（静态的）
// 	讲动态的数据抽取成形参，由使用者根据自身的情况动态的传入实参
// 封装功能组件
// 	功能点明确
// 	函数内部应该保留固定代码（静态的）
// 	将动态数据抽取成 props 参数，由使用者动态传入实参
// 	一个良好的组件要设置组件的必要性和及数据类型
import config from "../utils/config"
export default (url, data={}, method) => {
	// 1.创建 Promise 实例
	return new Promise((resolve, reject) => {
		wx.request({
			url: config.test + url,
			data,
			method,
			header:{
				"Content-Type": "application/x-www-form-urlencoded"
			},
			success: (res) => {
				// console.log("请求成功", res)
				resolve(res)
			},
			fail: (err) => {
				// console.log("请求失败", err)
				reject(err)
			}
		})
	})
}