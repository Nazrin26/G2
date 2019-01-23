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
        <th scope="col" v-show="addBuyer">
          <div class="input-group input-group-sm">
            <select v-model="buyer"
                    @change="onChange()"
                    class="form-control">
              <option v-for="buyer in buyers"
                      v-bind:key="buyer.id"
                      :value="buyer.id" >{{buyer.name}}</option>
            </select>
          </div></th>
        <th scope="col" v-show="isEditable"></th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item,index) in items"
        :key="item.id"
      >
        <th scope="row">{{item.itemName}}</th>
        <td>{{item.itemDescription}}</td>
        <td>
          <div class="input-group input-group-sm mb-3">
            <input type="number"
                   v-model="item.qty"
                   class="form-control"
                   id="inputQty"
                   placeholder="Quantity" :disabled="item.disabled">
          </div>
        </td>
        <td>{{item.price}}</td>
        <td>{{item.totalPrice}}</td>
        <td v-show="addBuyer">
          <div class="input-group input-group-sm">
            <select v-model="item.buyer"
                    class="form-control"
                    id="inputBuyer">
              <option v-for="buyer in buyers"
                      v-bind:key="buyer.id"
                      :value="buyer.id" >{{buyer.name}}</option>
            </select>
          </div>
        </td>
        <td v-show="isEditable">
          <a class="edit_mode" v-show="item.disabled" @click="editQty(index)">
            <i class="fa fa-edit"></i>
          </a>
          <a class="edit_mode" v-show="!item.disabled" @click="saveQty(index)">
            <i class="fa fa-save"></i>
          </a>
          <a class="edit_mode ml-2" v-show="item.disabled" @click="deleteItem(index)">
            <i class="fa fa-remove"></i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <button type="button"
            class="btn btn-primary btn-sm float-right"
            data-toggle="modal"
            v-show="isEditable"
            data-target="#exampleModal">Add Item</button>
    <Item></Item>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  data() {
    return {
      buyers: [{
        id: 0, name: 'Select Buyer',
      }, {
        id: 1, name: 'Buyer 1',
      }, {
        id: 2, name: 'Buyer 2',
      }],
      disabled: true,
      buyer: 0,
      items: [{
        itemName: 'laptop',
        itemDescription: 'laptop description',
        qty: 2,
        price: 1000,
        totalPrice: 2000,
        buyer: 1,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
        buyer: 2,
        disabled: true,
      }],
    };
  },
  props: ['addBuyer', 'isEditable'],
  components: {
    Item,
  },
  methods: {
    editQty(index) {
      const changeItem = this.items[index];
      changeItem.disabled = !changeItem.disabled;
    },
    saveQty(index) {
      const changeItem = this.items[index];
      changeItem.disabled = !changeItem.disabled;
      changeItem.totalPrice = changeItem.qty * changeItem.price;
      this.$set(this.items, index, changeItem);
      const amount = this.items.reduce((acc, item) => acc + item.totalPrice, 0);
      this.$emit('update', amount);
    },
    onChange() {
      for (let i = 0; i < this.items.length; i += 1) {
        console.log(i);
        const changeItem = this.items[i];
        changeItem.buyer = this.buyer;
        this.$set(this.items, i, changeItem);
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      const amount = this.items.reduce((acc, item) => acc + item.totalPrice, 0);
      this.$emit('update', amount);
    },
  },
  created() {
    const amount = this.items.reduce((acc, item) => acc + item.totalPrice, 0);
    this.$emit('update', amount);
  },
};
</script>
