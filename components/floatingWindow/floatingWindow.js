// components/floatingWindow/floatingWindow.js
var flag = 0
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: String,
            value: '110rpx'
        },
        radius: {
            type: String,
            value: '100%'
        },
        top: {
            type: String,
            value: '950rpx'
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        open() {
            if (flag == 0) {
                this.setData({
                    height: '450rpx',
                    radius: '50rpx',
                    top: '610rpx'
                })
                flag = 1
                return
            }
            if (flag == 1) {
                this.setData({
                    height: '110rpx',
                    radius: '100%',
                    top: '950rpx'
                })
                flag = 0
                return
            }
        }
    }
})
