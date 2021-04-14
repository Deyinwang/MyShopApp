<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item>
				<image src="/static/cat.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/girl.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/flower.png"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" 
			@click="navItemClick(item.path)">
				<view><uni-icons :type="item.img" color="#B50E03" size="45"></uni-icons>
					<!-- <image :src="item.img"></image> -->
					</view>
				<text>{{item.title}}</text>
			</view>
			
		</view>
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goDetail" :goods="goods"></goods-list>
		</view>
	</view> 
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	
	export default {
		data() {
			return {
				goods: [
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
					}
				],
				navs: [
					{
						img:'shop',
						title:'我的超市',
						path:'/pages/goods/goods'
					},
					{
						img:'contact',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						img:'images-filled',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						img:'videocam',
						title:'学习视频',
						path:'/pages/video/video'
					}
				]
			}
		},
		onLoad() {
			this.getData()
		},
		components:{"goods-list":goodsList},
		methods: {
			async getData(){
				const res = await this.$myRequest({
					url: ''
				})
				console.log(res)
			/* 	uni.request({
					url:'https://www.baidu.com',
					success:res => {
						console.log(res)
					}
				}) */
			},
			navItemClick(url) {
				//onsole.log(url)
				uni.navigateTo({
					url
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
	}
	
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view {
				margin: 5px auto;
				image {
					border-radius: 60rpx;
					background: $bg-color;
					height: 100rpx;
					width: 100rpx;
				}
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	
	.hot_goods{
		background: #eee;
		overflow: hidden;
		margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $bg-color;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
			margin: 7rpx 0;
			font-weight: bold;
		}
		
	}
	
</style>
