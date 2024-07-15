<template>
	<div class="posts">
		<h1>Posts</h1>
		<uL>
			<li>
				<RouterLink to="/postDetail/id1">Post 1</RouterLink>
			</li>
			<li>
				<RouterLink to="/postDetail/id2">Post 2</RouterLink>
			</li>
			<li>
				<RouterLink to="/postDetail/id3">Post 3</RouterLink>
			</li>
		</uL>
		<textarea v-autofocus></textarea>


	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { vAutofocus } from "../directives/vAutoFocus";
</script>


<style scoped>
ul {

	margin-bottom: 30px;
}
</style>
