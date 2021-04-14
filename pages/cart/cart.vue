<template>
    <view>
        <common-car :list="goodsProducts" @next="toNext" @toBuy="toBuyGoods"></common-car>
    </view>
</template>

<script>

import commonCar from "@/components/lebron-car/commonCar.vue"

export default {
        components: {
            "common-car": commonCar
        },
        data() {
            return {
                goodsProducts: [
					{
                        name: '我的购物车1',
                        checked: 1,
                        goods: [
                            {
								id: 1,
                                img: '/static/ry6plus.png',
                                title: '荣耀6Plus 16G双4G版',
                                remark: '华为（HUAWEI）',
                                price: '2199.00',
                                number: 1,
                                checked: 1
                            },{
								id: 2,
                                img: '/static/ry6plus2.png',
                                title: '荣耀6Plus 32G双8G版',
                                remark: '华为（HUAWEI）',
                                price: '5699.00',
                                number: 1,
                                checked: 1
                            }
                        ]
                    },
					{
					    name: '我的购物车2',
					    checked: 1,
					    goods: [
					        {
								id: 3,
					            img: '/static/ry6plus.png',
					            title: '荣耀6Plus 16G双4G版',
					            remark: '华为（HUAWEI）',
					            price: '2199.00',
					            number: 1,
					            checked: 1
					        },{
								id: 4,
					            img: '/static/ry6plus2.png',
					            title: '荣耀6Plus 32G双8G版',
					            remark: '华为（HUAWEI）',
					            price: '5699.00',
					            number: 1,
					            checked: 1
					        }
					    ]
					}
				]
            }
        },
        onLoad() {},
        methods: {
            toBuyGoods(){
                console.log("点击去购买页面")
            },
            toNext(){
                //console.log("点击下一步")
				uni.showToast({
				  title: `点击结算`,
				  icon: 'none'
				})
            }
        }
    }
</script>

<style>

</style>
