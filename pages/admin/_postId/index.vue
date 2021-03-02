<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from 'axios';

export default {
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-b1904-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => context.error(e));
  },
  layout: "admin",
  components: {
    AdminPostForm
  },
  data() {},
  methods:{
     onSubmitted(postData) {
      axios
        .put(
          "https://nuxt-blog-b1904-default-rtdb.firebaseio.com/posts/"+this.$route.params.postId+"/.json",
          postData
        )
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
    },
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
