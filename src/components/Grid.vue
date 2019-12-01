<template>
  <v-container fill-height fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex s9>
        <v-card light color="primary">
          <v-layout row wrap>
            <v-flex>
              <div>
                <v-tabs v-model="active" centered>
                  <v-tabs-items v-model="tab">
                    <v-card flat>
                      <div v-show="currentTab === 0">
                        <v-card max-height="1200" max-width="1352">
                          <v-container height="0" fluid grid-list-md>
                            <v-layout>
<!--                              <v-flex-->
<!--                                v-for="product in products"-->
<!--                                :key="product.id"-->
<!--                                v-bind="{ [`xs${product.flex}`]: true }"-->
<!--                              >-->
<!--                                <v-card>-->
<!--                                  <v-img-->
<!--                                    :src="product.src"-->
<!--                                    class="white&#45;&#45;text"-->
<!--                                    height="200px"-->
<!--                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--                                  >-->
<!--                                    <v-card-title-->
<!--                                      class="fill-height align-end"-->
<!--                                    ></v-card-title>-->
<!--                                  </v-img>-->

<!--                                  <v-card-actions>-->
<!--                                    <span>-->
<!--                                      {{ product.title }} ${{-->
<!--                                        product.price-->
<!--                                      }}</span-->
<!--                                    >-->
<!--                                  </v-card-actions>-->
<!--                                </v-card>-->
<!--                              </v-flex>-->
                            </v-layout>
                          </v-container>
                        </v-card>
                      </div>
                    </v-card>
                  </v-tabs-items>
                </v-tabs>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark color="primary">
          <v-card-text class="px-0">Order Details</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.card {
  padding: 12px;
}
.v-tabs__container {
  height: 0px !important;
}
.v-tabs__item:not(.v-tabs__item--active) {
  opacity: 1 !important;
}
.v-card__text {
  padding: 16px;
  width: 100%;
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      active: null,
      currentTab: 0,
      tab: null
    };
  },
  props: {
    products: {
      type: Array,
      required: false
    }
  }
};
</script>
