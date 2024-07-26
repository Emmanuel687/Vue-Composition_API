<template>
	<div class="posts">
		<h1>Posts</h1>
		<ul>
			<li v-for="(post, index) in posts" :key="index">
				<RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
			</li>
		</ul>
		<textarea v-autofocus></textarea>


	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { vAutofocus } from "../directives/vAutoFocus";
import { ref } from "vue"


// Posts Start
const posts = ref([
	{ id: 'id1', title: 'Post 1' },
	{ id: 'id2', title: 'Post 2' },
	{ id: 'id3', title: 'Post 3' },
	{ id: 'id4', title: 'Post 4' }
])
// Posts End

</script>


<style scoped>
ul {

	margin-bottom: 30px;
}
</style>
