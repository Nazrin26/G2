<template>
  <div>
    <table class="table table-sm">
      <thead class="thead-dark">
      <tr>
        <th scope="col">Item Name</th>
        <th scope="col">Item Description</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        <th scope="col">Total Price</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <th scope="row">{{item.itemName}}</th>
        <td>{{item.itemDescription}}</td>
        <td>{{item.qty}}</td>
        <td>{{item.price}}</td>
        <td>{{item.totalPrice}}</td>
      </tr>
      </tbody>
    </table>
    <button type="button"
            class="btn btn-primary btn-sm float-right"
            data-toggle="modal"
            data-target="#exampleModal">Add Item</button>
    <Item></Item>
  </div>
</template>

<script>
import Item from './Items.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Item,
  },
  computed: {
    totalPrice() {
      // var amount = this.items.reduce((acc, item) => acc + item.totalPrice, 0)
      // this.$parent.details.totalAmount = amount
      return 1;
    },
  },
};
</script>
