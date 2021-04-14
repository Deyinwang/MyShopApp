<template>
	<view class="news">
		<news-list @itemClick="goDetail" :newsList="news"></news-list>
	</view>
</template>

<script>
	import newsList  from '../../components/news-list/news-list.vue'
	export default {
		data() {
			return {
				news:[
					{
						id:1,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:2,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:3,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:4,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:5,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:6,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					},
					{
						id:7,
						img_url:'../../static/news1.png',
						title:'1季度多家房企利润跌幅超50% 去库存促销战打响',
						add_time: new Date(),
						click:5158
					}
				]
			}
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url:'../news-detail/news-detail?id='+id
				})
			}
		},
		components:{"news-list": newsList}
	}
</script>

<style lang="scss">
.news {
	
}
</style>
