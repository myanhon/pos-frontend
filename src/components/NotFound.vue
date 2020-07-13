<template>
  <v-content>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">
                  Looks like you're lost
                </h3>

                <p>The page you are looking for does not exist!</p>
                <h1>PAGE NOT FOUND</h1>
                <p class="link_404">
                  <router-link class="remove-underline " to="/"
                    >Go To Home</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.remove-underline {
  text-decoration: none;
  color: white;
}
p {
  font-family: "Oswald", sans-serif;
}
h1 {
  font-family: "Oswald", sans-serif;
}
h2 {
  font-family: "Oswald", sans-serif;
}
h3 {
  font-family: "Oswald", sans-serif;
}
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
