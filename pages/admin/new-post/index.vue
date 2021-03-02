<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post(
          "https://nuxt-blog-b1904-default-rtdb.firebaseio.com/posts.json",
          postData
        )
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>