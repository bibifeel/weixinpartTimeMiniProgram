// 登陆流程
// 1.收集表单项数据
// 2.前端验证
//      1)用户信息时候合法(账号密码是否合法)
//      2)前端验证不通过，不需要发请求给后端
//      3)通过之后携带账号密码发送给后端
// 3.后端验证
//      1)查看用户是否存在
//      2)不存在返回不存在
//      3)比对密码是否正确
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: '', // 手机号
        password: '' // 密码
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    handleInput(e) {
        // let type = e.currentTarget.id
        let type = e.currentTarget.dataset.type
        console.log(type, e.detail.value)
        this.setData({
            [type]: e.detail.value
        })
    },
    async login() {
        // 1.收集表单信息
        let { phone, password } = this.data
        // 2.前端验证
        // 为空 正确 不正确
        if (!phone) {
            wx.showToast({
                title: '手机号不能为空',
                icon: 'error'
            })
            return
        }
        // 定义手机号正则
        let phoneReg = /^1[3-9][0-9]{9}$/
        if (!phoneReg.test(phone)) {
            wx.showToast({
                title: '手机号格式错误',
                icon: 'error'
            })
            return
        }
        // 验证密码
        if (!password) {
            wx.showToast({
                title: '密码不能为空',
                icon: 'error'
            })
            return
        }

        // 后端验证
        let result = await request('/api/login', { phone, password }, 'POST')
        console.log(result)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})