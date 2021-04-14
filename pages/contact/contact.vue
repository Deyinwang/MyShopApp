<template>
	<view class="contact">
		<image src="/static/aboutUs.png"></image>
		<view class="info">
			<view @click="phoneCall">联系电话：18217766771（点击拨打）</view>
			<view>联系地址：山东省菏泽市牡丹区牡丹路香格里拉国际广场</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale:13,
				longitude: 115.470113,
				latitude: 35.245356,
				markers: [
					{
						longitude: 115.463513,
						latitude: 35.238756,
						iconPath: '/static/map.png',
						width: 30,
						height: 30
					}
				]
				
			}
		},
		methods: {
			phoneCall() {
				uni.makePhoneCall({
					phoneNumber:'18217766771'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}
		.info {
			padding: 10rpx 20 rpx;
			font-size: 30rpx;
			view {
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1rpx solid;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
