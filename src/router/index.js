import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetailView from "../views/PostDetailView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/posts",
			name: "Post",
			component: () => import("../views/PostsView.vue"),
		},
		{
			path: "/postDetail/:id",
			name: "PostDetail",
			component: PostDetailView,
		},
	],
});

export default router;
