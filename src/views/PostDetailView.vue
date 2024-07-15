<template>
	<div class="posts">
		<h1>This is a Post Page</h1>
		<p>Display the content of post with ID of {{ $route.params.id }}</p>
		<p>
			<RouterLink to="/posts">&lt; Back </RouterLink>
		</p>

	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { vAutofocus } from "../directives/vAutoFocus";
</script>
