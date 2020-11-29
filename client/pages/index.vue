<template lang="pug">
  .page
    section.intro
      h1 BLOG with Nuxt.js
    section.post
      // 페이지에 표시될 포스트 목록
      article.post__preview
        nuxt-link(:to="`/posts/${1}`")
          figure.post__preview__thumnail(style="background-image: url(//3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/sixwaysandco.jpg)")
          .post__preview__content
            h2.post__preview__content__title 포스트 제목 1
            p.post__preview__content__text 포스트 내용
      article.post__preview
        nuxt-link(:to="`/posts/${2}`")
          figure.post__preview__thumnail(style="background-image: url(//www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg)")
          .post__preview__content
            h2.post__preview__content__title 포스트 제목 2
            p.post__preview__content__text 포스트 내용
</template>

<script>
export default {
	head() {
		return {
			title: 'Home',
		};
	},
};
</script>
