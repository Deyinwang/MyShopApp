<template>
	<view class="goods_list">
		<view class="goods_item" 
		@click="navigator(item.id)"
		v-for="(item,index) in goods" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="goods_price">
				<text>￥{{item.sell_price}}</text><text>￥{{item.market_price}}</text>
			</view>
			<view class="goods_name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		methods:{
			navigator(id) {
				this.$emit('goodsItemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 5rpx;
		.goods_item {
			background: #fff;
			width: 368rpx;
			margin: 5rpx 0;
			padding: 12rpx;
			box-sizing: border-box;
			//text-align: center;
			image {
				width: 100%;
				height: 150px;
				display: block;
				margin: auto;
			}
			.goods_price {
				color: $bg-color;
				font-size: 36rpx;
				margin: 10rpx 0;
				text:nth-child(2) {
					color: #CCC;
					font-size: 28rpx;
					margin-left: 18rpx;
					text-decoration: line-through;
				}
			}
			.goods_name {
				font-size: 30rpx;
				line-height: 50rpx;
				padding-bottom: 10rpx;
			}
		}
	}
</style>
