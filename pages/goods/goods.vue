<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goDetail" :goods="good"></goods-list>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	
	export default {
		data() {
			return {
				flag: false,
				good: [],
				goodsData: [
					{
						id:1,
						title:'华为（HUAWEI）荣耀6Plus 16G双4G版',
						img_url:'/static/ry6plus.png',
						sell_price:2199,
						market_price:2499
					},
					{
						id:2,
						title:'华为（HUAWEI）荣耀6Plus 32G双8G版',
						img_url:'/static/ry6plus.png',
						sell_price:5699,
						market_price:8499
					},
					{
						id:3,
						title:'华为（HUAWEI）荣耀6Plus 8G双2G版',
						img_url:'/static/ry6plus.png',
						sell_price:1099,
						market_price:2099
					},
					{
						id:4,
						title:'华为（HUAWEI）荣耀6Plus 16G双4G版',
						img_url:'/static/ry6plus.png',
						sell_price:2199,
						market_price:2499
					},
					{
						id:5,
						title:'华为（HUAWEI）荣耀6Plus 32G双8G版',
						img_url:'/static/ry6plus.png',
						sell_price:5699,
						market_price:8499
					},
					{
						id:6,
						title:'华为（HUAWEI）荣耀6Plus 8G双2G版',
						img_url:'/static/ry6plus.png',
						sell_price:1099,
						market_price:2099
					},
					{
						id:7,
						title:'华为（HUAWEI）荣耀6Plus 16G双4G版',
						img_url:'/static/ry6plus.png',
						sell_price:2199,
						market_price:2499
					}
				]
			}
		},
		methods: {
			getGoodsList(callBack){
				//ajax request to get data
				this.good = this.goodsData,
				callBack && callBack()
			},
			goDetail(id) {
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
			}
		},
		components:{"goods-list":goodsList},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			//console.log("触底了")
			if(this.good.length <10)  return this.flag = true
		},
		onPullDownRefresh() {
			//清空数据
			this.good= [];
			setTimeout(()=> {
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			}, 1000)
			
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
