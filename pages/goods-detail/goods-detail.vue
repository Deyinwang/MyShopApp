<template>
	<view class="goods_detail">
		<swiper indicator-dots circular>
			<swiper-item>
				<image src="/static/ry6plus.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/ry6plus2.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/ry6plus3.png"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥2199</text>
				<text>￥2499</text>
			</view>
			<view class="goods_name">华为（HUAWEI）荣耀6Plus 32G双8G版</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：SD7159123456</view>
			<view>库存：226</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				华为荣耀6 Plus，2014年11月24日上午9点整，华为荣耀官方正式公布这款新机，售价是1999元，并称其为“2014收官之作，“独孤求败”。华为荣耀6 Plus于2014年12月16日正式发布。目前，华为荣耀6Plus共发布了两个版本，分别是标准版和双4G高配版。标配仅有黑白两种颜色可选，而高配则多了一款金色。
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options"
			:buttonGroup="buttonGroup"  @click="onClick" 
			@buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script>
	
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	
	export default {
		data() {
			return {
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 5
					},
				],
				buttonGroup: [
					{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
				]
			}
		},
		methods: {
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
			buttonClick (e) {
				//console.log(e)
				this.options[2].info++
			}
		},
		components: {uniGoodsNav},
		onLoad(options) {
			console.log(options)
		}
	}
</script>

<style lang="scss">
.goods_detail {
	swiper {
		height: 700rpx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.box1 {
		padding: 10px;
		.price {
			color: $bg-color;
			font-size: 36rpx;
			line-height: 80rpx;
			margin: 10rpx 0;
			text:nth-child(2) {
				color: #CCC;
				font-size: 28rpx;
				margin-left: 18rpx;
				text-decoration: line-through;
			}
		}
		.goods_name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	
	.box2 {
		padding: 10rpx;
		font-size: 32rpx;
		line-height: 60rpx;
	}
	
	.box3 {
		margin-bottom: 50px;
		padding: 10rpx;
		line-height: 60rpx;
		.tit {
			font-size: 32rpx;
			border-bottom: 1px solid #eee;
		}
		.content {
			font-size: 28rpx;
			color: #333;
		}

	}
}

.line {
	width: 750rpx;
	height: 10rpx;
	background: #eee;
}
.goods_nav {
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
