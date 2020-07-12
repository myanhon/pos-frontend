<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col class="box1" sm="6" md="5" lg="12">
        <v-card>
          <v-card-title>
            Products
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="pink accent-2"
                  dark
                  class="mb-2"
                  @click="emptyDialog"
                  v-on="on"
                  >Add New Product</v-btn
                >
              </template>
              <v-card :shaped="true" class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>New Item</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="name"
                      type="text"
                      v-model="dialogItem.name"
                    />
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Price"
                          name="price"
                          type="text"
                          v-model="dialogItem.price"
                        />
                      </v-col>
                      <v-col>
                        <v-select
                          :items="dropdownSize"
                          label="Size"
                          item-value="text"
                          v-model="dialogItem.size"
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-select
                          :items="dropdownCategory"
                          label="Category"
                          item-value="text"
                          v-model="dialogItem.category"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-file-input
                          label="Upload image"
                          ref="productImage"
                          v-model="dialogItem.image"
                        ></v-file-input>
                      </v-col>
                    </v-row>
                    <v-row
                      style="padding-bottom: 2%"
                      align="center"
                      justify="center"
                    ></v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeMySelf"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="getAllProducts"
            :search="search"
          >
            <template v-slot:item.productImage="{ item }">
              <img
                :src="serverUrl + item.productImage"
                style="width: 50px; height: 50px"
              />
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      search: null,
      serverUrl: process.env.VUE_APP_API_URL || "http://localhost:3000",
      dropdownCategory: [
        "Hot Drinks",
        "Cold Drinks",
        "Fish",
        "Meat",
        "Alcohol"
      ],
      dropdownSize: ["Small", "Medium", "Large"],
      dialogItem: {},
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Price", value: "price" },
        { text: "Size", value: "size" },
        { text: "Category", value: "category" },
        { text: "Productimage", value: "productImage", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  methods: {
    ...mapActions("Product", [
      "fetchAllProducts",
      "uploadFile",
      "addProduct",
      "deleteProduct"
    ]),
    emptyDialog() {
      this.dialogItem = {};
    },
    deleteItem(item) {
      if (confirm("Do you want really want to delete?")) {
        this.deleteProduct(item._id);
      }
    },
    save() {
      if (confirm("Do you want really want to update?")) {
        this.addProduct(this.dialogItem);
        this.dialog = false;
      }
    },
    closeMySelf() {
      this.dialog = false;
      this.emptyDialog();
    },
    editItem(item) {
      this.dialog = true;
      this.dialogItem._id = item._id;
      this.dialogItem.name = item.name;
      this.dialogItem.price = item.price;
      this.dialogItem.size = item.size;
      this.dialogItem.category = item.category;
      this.dialogItem.image = item.image;
    }
  },
  computed: {
    ...mapGetters("Product", ["getStatus", "getAllProducts"])
  },
  watch: {
    getStatus(newValue) {
      if (newValue !== "fetched successfully") {
        this.fetchAllProducts();
      }
    }
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
.box1 {
  background-color: #dcdcdc;
}
</style>
