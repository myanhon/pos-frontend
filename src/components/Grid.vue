<template>
  <v-container fill-height fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex s9>
        <v-card light color="#1abc9c">
          <v-tab
            v-for="(item, index) in category"
            :class="{ active: currentTab === index }"
            @click="currentTab = index"
            :key="item.id"
          >
            <v-card-text> {{ item.name }}</v-card-text>
          </v-tab>
          <v-layout row wrap>
            <v-flex>
              <div>
                <v-tabs v-model="active" slider-color="yellow" centered>
                  <v-tabs-items v-model="tab">
                    <v-card flat>
                      <div v-show="currentTab === 0">
                        <v-card max-height="1200" max-width="1352">
                          <v-container height="0" fluid grid-list-md>
                            <v-layout>
                              <v-flex
                                v-for="product in products"
                                :key="product.id"
                                v-bind="{ [`xs${product.flex}`]: true }"
                              >
                                <v-card>
                                  <v-img
                                    :src="product.src"
                                    class="white--text"
                                    height="200px"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                  >
                                    <v-card-title
                                      class="fill-height align-end"
                                      v-text="product.title"
                                    ></v-card-title>
                                  </v-img>

                                  <!--                                  <v-card-actions>-->
                                  <!--                                  </v-card-actions>-->
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card>
                      </div>
                      <div v-show="currentTab === 1">
                        <v-card-text>Tab1 content</v-card-text>
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
    name: {
      type: String,
      required: true
    },
    category: {
      type: Array,
      required: false
    },
    products: {
      type: Array,
      required: false
    }
  }
};
</script>
