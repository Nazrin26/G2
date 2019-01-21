<template>
  <div class="col-12">
    <div class="row flex-xl-nowrap pl-md-5 pr-md-5">
      <h5>
        Reference :
        <b>{{ details.docNumber }}</b>
      </h5>
      &nbsp;
      <h5>
        Status :
        <b>{{ details.status }}</b>
      </h5>
    </div>
    <hr/>
    <div class="row flex-xl-nowrap">
      <div class="col-12 col-md-9 col-xl-9 py-md-3 pl-md-5 pr-md-5 bd-content">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputDateRaised">Date Raised</label>
              <div class="input-group input-group-sm mb-3">
                <input type="date"
                       v-model="details.dateRaised"
                       class="form-control"
                       id="inputDateRaised"
                       placeholder="Date Raised" disabled>
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="PRNumber">PR Number</label>
              <div class="input-group input-group-sm mb-3">
                <a href="#" id="PRNumber">{{ details.prNumber }}</a>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputDepartment">Department</label>
              <div class="input-group input-group-sm mb-3">
                <select v-model="details.department" class="form-control" id="inputDepartment">
                  <option v-for="department in departments"
                          v-bind:key="department.id"
                          :value="department.id" >{{department.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="inputCostCenter">Cost Center</label>
              <div class="input-group input-group-sm mb-3">
                <select v-model="details.costCenter" class="form-control" id="inputCostCenter">
                  <option v-for="costCenter in costCenters"
                          v-bind:key="costCenter.id"
                          :value="costCenter.id" >{{costCenter.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="inputStock">Stock</label>
              <div class="input-group input-group-sm mb-3">
                <select v-model="details.stock" class="form-control" id="inputStock">
                  <option v-for="stock in stocks"
                          v-bind:key="stock.id"
                          :value="stock.id" >{{stock.name}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-10"></div>
            <div class="form-group col-md-2 float-right">
              <label for="inputTotalAmount">Total Amount</label>
              <div class="input-group input-group-sm mb-3">
                <input type="number"
                       v-model="totalPrice"
                       class="form-control"
                       id="inputTotalAmount"
                       placeholder="Total Amount" disabled>
              </div>
            </div>
          </div>
        </form>
        <GINItems :items="items"></GINItems>
        <br/>
        <button type="button" class="btn btn-primary btn-sm" @click="saveGIN">Save</button>
      </div>
      <div class="d-none d-xl-block col-xl-3 bd-toc doc-right">
        <ApprovalFlow></ApprovalFlow>
        <Comments></Comments>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GINItems from './PRItems.vue';
import ApprovalFlow from '../Shared/ApprovalFlow.vue';
import Comments from '../Shared/Comments.vue';

export default {
  name: 'home',
  components: {
    GINItems,
    ApprovalFlow,
    Comments,
  },
  data() {
    return {
      details: {
        docNumber: 'GRN00072',
        status: 'Waiting Approve',
        dateRaised: '2018-12-29',
        prNumber: 'PR00001',
        department: 1,
        costCenter: 2,
        stock: 1,
        totalAmount: 0,
      },
      stocks: [{
        id: 0, name: 'Select Stocks',
      }, {
        id: 1, name: 'stock1',
      }, {
        id: 2, name: 'stock2',
      }],
      costCenters: [{
        id: 0, name: 'Select Cost Center',
      }, {
        id: 1, name: 'cc1',
      }, {
        id: 2, name: 'cc2',
      }],
      departments: [{
        id: 0, name: 'Select Department',
      }, {
        id: 1, name: 'dep1',
      }, {
        id: 2, name: 'dep2',
      }],
      items: [{
        itemName: 'laptop',
        itemDescription: 'laptop description',
        qty: 2,
        price: 1000,
        totalPrice: 2000,
      }, {
        itemName: 'notebook',
        itemDescription: 'Moleskine Harry Potter',
        qty: 2,
        price: 25,
        totalPrice: 50,
      }],
    };
  },
  methods: {
    saveGIN() {
      const PR = {
        Id: null,
        GINNumber: this.details.docNumber,
        GINStatus: this.details.status,
        DateRaised: this.details.dateRaised,
        PRNumber: this.details.prNumber,
        DepartmentId: this.details.department,
        CostCenter: this.details.costCenter,
        Stock: this.details.costCenter,
        GINItems: null,
      };
      console.log(GIN);
      axios.post('https://localhost:44357/api/gin/SaveGIN', {
        Item: 'green',
      })
        .then(() => {
          console.log('success');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    totalPrice() {
      // var amount = this.items.reduce((acc, item) => acc + item.totalPrice, 0)
      // this.$parent.details.totalAmount = amount
      return 1;
    },
  },
  async beforeCreate() {
    this.documentNumber = 0;
  },
};
</script>

<style>
  .doc-right{
    border-left: 1px solid rgba(0,0,0,.1);
  }
</style>
