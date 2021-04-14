<template>
	<view>
		<view class="news_item" 
		@click="navigator(item.id)"
		v-for="item in newsList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['newsList'],
		filters:{
			formatDate(date){
				const myDate = new Date(date)
				const year = myDate.getUTCFullYear()
				const month = (myDate.getMonth()+1).toString().padStart(2,0)
				const day = myDate.getDate().toString().padStart(2,0)
				return year + '-' + month + '-' + day
			}
		},
		methods: {
			navigator(id) {
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
.news_item {
	display: flex;
	margin: 10rpx 10rpx;
	border-bottom: 1px solid $bg-color;
	image {
		min-width: 200rpx;
		max-width: 200rpx;
		height: 150rpx;
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 15rpx;
		.tit {
			font-size: 30rpx;
		}
		.info {
			font-size: 24rpx;
			text:nth-child(2){
				margin-left: 30rpx;
			}
		}
	}
}
	
</style>
