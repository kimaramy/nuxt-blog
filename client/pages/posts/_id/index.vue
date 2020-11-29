<template lang="pug">
  .page

    section.post
      h1.post__title 포스트 제목
      div.post__info
        span.post__info__timestamp 작성일자
        span.post__info__author 작성자
      p.post__content 포스트 내용
      
    section.post-feedback
      p
        | 해당 포스트에 대해 궁금한 점이 있다면,
        a(href="mailto:bryan@koreaspacedata.com") bryan@koeraspacedata.com
        | 으로 문의주세요.
</template>

<script>
export default {
	head() {
		return {
			title: `${this.$route.params.id}`,
			titleTemplate: '%s | Posts',
		};
	},
};
</script>

<style lang="scss" scoped>
.page {
	padding: 30px;
	text-align: center;
	box-sizing: border-box;
}

.post {
	width: 100%;
	@include tablet {
		width: 600px;
	}
	&__title {
		margin: 0;
	}
	&__info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-sizing: inherit;
		border-bottom: 1px solid #dbdbdb;
		padding: 10px;
	}
	&__timestamp,
	&__author {
		margin: 0 10px;
		color: rgb(122, 122, 122);
	}
}

.post-feedback {
	padding: {
		left: 5px;
		right: 5px;
	}
	color: $primary;
	text-decoration: none;
	transition: color 0.4s ease;
	&:hover,
	&:active {
		color: $primary-dark;
	}
}
</style>
