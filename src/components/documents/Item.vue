<template>
  <div class="modal fade"
       id="exampleModal"
       tabindex="-1"
       role="dialog"
       ref="addItemModal"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form ref="form">
            <div class="form-row">
              <div class="form-group col-12">
                <label for="itemName" class="col-form-label">Item Name:</label>
                <input type="text" class="form-control" v-model="itemName" id="itemName">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="itemDescription" class="col-form-label">Item Description</label>
                <input type="text"
                       class="form-control"
                       v-model="itemDescription"
                       id="itemDescription">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="qty" class="col-form-label">Qty:</label>
                <input type="number" class="form-control" v-model="qty" id="qty">
              </div>
              <div class="form-group col-md-4">
                <label for="price" class="col-form-label">Price:</label>
                <input type="number" class="form-control" v-model="price" id="price">
              </div>
              <div class="form-group col-md-4">
                <label for="totalPrice" class="col-form-label">Total Price:</label>
                <input type="number"
                       class="form-control"
                       v-model="totalPrice"
                       id="totalPrice" disabled>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="addItem">Add item</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: '',
      itemDescription: '',
      qty: 0,
      price: 0,
    };
  },
  computed: {
    totalPrice() {
      return this.qty * this.price;
    },
  },
  methods: {
    addItem() {
      const item = {
        id: 1,
        itemName: this.itemName,
        itemDescription: this.itemDescription,
        qty: this.qty,
        price: this.price,
        totalPrice: this.totalPrice,
        buyer: 0,
        disabled: true,
      };
      this.$parent.items.push(item);
      this.$refs.addItemModal.hide();
      //   this.$store.dispatch('addItem', item)
      //     .then(() => {
      //     })
      //     .catch(() => {})
    },
  },
};
</script>
