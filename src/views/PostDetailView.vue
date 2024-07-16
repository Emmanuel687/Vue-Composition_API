<template>
	<div class="posts">
		<h1>This is a Post Page</h1>
		<button @click="showPostId">Show Post ID</button>
		<p>Display the content of post with ID of {{ route.params.id }}</p>
		<p>
			<RouterLink to="/posts">&lt; Back </RouterLink>
			<button @click="goHomeIn3Seconds">Go Home to First Post</button>
			<button @click="goToPostOne">Go to Post One</button>

		</p>

	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { vAutofocus } from "../directives/vAutoFocus";
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

const showPostId = () => {
	alert(route.params.id)
}

const goHomeIn3Seconds = () => {
	setTimeout(() => router.push("/postDetail/:id")
		, 3000)
}

const goToPostOne = () => {
	router.push(
		{
			name: "PostDetail",
			params: {
				id: "id1"
			}
		}
	)

}
</script>
