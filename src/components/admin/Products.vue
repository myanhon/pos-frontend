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
                <v-btn color="primary" dark class="mb-2" v-on="on"
                  >New Item</v-btn
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
                      v-model="saveItem.name"
                    />
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Price"
                          name="price"
                          type="text"
                          v-model="saveItem.price"
                        />
                      </v-col>
                      <v-col>
                        <v-select
                          :items="dropdownSize"
                          label="Size"
                          item-value="text"
                          v-model="saveItem.size"
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-select
                          :items="dropdownCategory"
                          label="Category"
                          item-value="text"
                          v-model="saveItem.category"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-file-input
                          label="Upload image"
                          ref="productImage"
                          v-model="saveItem.image"
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
                  <v-btn color="blue darken-1" text @click="close"
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
      dropdownCategory: ["Hot Drinks", "Cold Drinks", "Fish", "Meat"],
      dropdownSize: ["Small", "Medium", "Large"],
      saveItem: {
        name: null,
        price: null,
        size: null,
        category: null,
        image: null
      },
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
        { text: "Actions", value: "actions", sortable: false }
      ],
      selectedImage: ""
    };
  },
  methods: {
    ...mapActions("Product", ["uploadFile", "addProduct"]),
    editItem(item) {
      console.log("edit:", item);
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialog = true;
    },
    deleteItem(item) {
      const index = this.getAllProducts.indexOf(item);
      console.log("delete:", item);
      confirm("Are you sure you want to delete this item?") &&
        this.getColdDrinks.splice(index, 1);
    },
    save() {
      console.log("saveItem:", this.saveItem);
      this.addProduct(this.saveItem);
    },
    close() {
      this.dialog = false;
    }
  },
  computed: {
    ...mapGetters("Product", ["getAllProducts"])
  },
  created() {
    console.log(this.getAllProducts);
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
