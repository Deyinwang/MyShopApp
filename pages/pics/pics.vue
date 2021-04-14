<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index)"
			:class="active===index?'isActive':''" 
			v-for="(item,index) in cates" :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in imgs" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				imgs: [
					{
						id: 1,
						img_url:'/static/pic1.png?Content-Type=image/jpg',
						title:'欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果'
					},
					{
						id: 2,
						img_url:'/static/pic2.png?Content-Type=image/jpg',
						title:'欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果'
					},
					{
						id: 3,
						img_url:'/static/pic3.png?Content-Type=image/jpg',
						title:'欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果'
					}
				],
				cates: [],
				catesData: [
					{
						id: 1,
						title: '摄影设计'
					},
					{
						id: 2,
						title: '空间设计'
					},
					{
						id: 3,
						title: '户型装饰'
					},
					{
						id: 4,
						title: '广告模型'
					},
					{
						id: 5,
						title: '摄影学习'
					},
					{
						id: 6,
						title: '摄影器材'
					},
					{
						id: 7,
						title: '美妆护肤'
					},
					{
						id: 8,
						title: '家用电器'
					},
					{
						id: 9,
						title: '汽车用品'
					},
					{
						id: 10,
						title: '国家地理'
					}
				]
			}
		},
		methods: {
			getPicsCate() {
				this.cates = this.catesData
			},
			leftClickHandle(index) {
				this.active = index
			},
			previewImg(current) {
				const urls = this.imgs.map(item =>{
					return item.img_url
				})
				uni.previewImage({
					indicator: 'default',
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
.page {
	height: 100%;
}

.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 1100rpx;
		border-right: 1px solid #eee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.isActive {
			background: $bg-color;
			color: #FFF;
		}
	}
	.right {
		height: 1100rpx;
		width: 520rpx;
		margin: 10rpx auto;
		.item {
			image {
				height: 520rpx;
				width: 520rpx;
				border-radius: 15px;
			}
			text {
				line-height: 60rpx;
				font-size: 30rpx;
			}
			
		}
	}
}

</style>
