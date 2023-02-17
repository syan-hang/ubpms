<template>
  <div class="not-found">
    <div class="content">
      <h1 class="title">Oops!</h1>
      <p class="message">We can't seem to find the page you're looking for.</p>
      <router-link class="button" to="/">Go back to the homepage</router-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "NotFound",
};
</script>
  
  <style lang="scss">
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  .content {
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 3rem 2rem;
    text-align: center;

    .title {
      font-size: 8rem;
      color: #222;
      margin: 0;
      font-weight: 700;
      letter-spacing: -5px;
      text-shadow: 3px 3px 0px #fff;
    }

    .message {
      font-size: 2rem;
      margin: 2rem 0;
      color: #555;
      font-weight: 500;
    }

    .button {
      display: inline-block;
      background-color: #007aff;
      color: #fff;
      border-radius: 5px;
      padding: 1rem 2rem;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #0066cc;
      }
    }
  }
}
</style>
  