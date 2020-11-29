<template lang="pug">
  .page
    h1.page-title page-posts
    p 블로그 포스트 목록이 표시되는 페이지입니다.
    .page-list
</template>

<script>
export default {
	head() {
		return {
			title: 'Posts',
		};
	},
};
</script>

<style lang="scss" scoped>
.page-list {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
