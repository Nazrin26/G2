<template>
  <div class="col-12 mt-4" id="documentForm">
    <div class="row flex-xl-nowrap pl-md-5 pr-md-5">
      <h5>
        Reference :
        <b>{{ docDetails.docNumber }}</b>
      </h5>
      &nbsp;
      <h5>
        Status :
        <b>{{ docDetails.docStatus }}</b>
      </h5>
    </div>
    <hr/>
    <div class="row flex-xl-nowrap">
      <div class="col-12 col-md-9 col-xl-9 py-md-3 pl-md-5 pr-md-5 bd-content">
        <div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputOrderType">Date Raised</label>
              <div class="input-group input-group-sm">
                <input type="text"
                       v-model="orderType"
                       class="form-control"
                       id="inputOrderType"
                       placeholder="OrderType" disabled>
              </div>
            </div>
            <div class="form-check">
              <label for="checkAnnual" class="form-check-label">Annual</label>
              <input type="checkbox"
                     v-model="isAnnual"
                     class="form-check-input mt-lg-5"
                     id="checkAnnual" disabled>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputProject">Project</label>
              <div class="input-group input-group-sm">
                <select v-model="project"
                        class="form-control"
                        :disabled="!isEditable"
                        id="inputProject">
                  <option v-for="project in projects"
                          v-bind:key="project.id"
                          :value="project.id" >{{project.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="inputCostCenter">Cost Center</label>
              <div class="input-group input-group-sm">
                <select v-model="costCenter"
                        class="form-control"
                        :disabled="!isEditable"
                        id="inputCostCenter">
                  <option v-for="costCenter in costCenters"
                          v-bind:key="costCenter.id"
                          :value="costCenter.id" >{{costCenter.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="inputRequestDate">Request Date</label>
              <div class="input-group input-group-sm">
                <input type="date"
                       v-model="requestDate"
                       class="form-control"
                       id="inputRequestDate"
                       placeholder="Request Date" disabled>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="inputRequestedDate">Requested Date</label>
              <div class="input-group input-group-sm">
                <input type="date"
                       v-model="requestedDate"
                       class="form-control"
                       id="inputRequestedDate"
                       :disabled="!isEditable"
                       placeholder="Requested Date">
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputRequestor">Requestor</label>
              <div class="input-group input-group-sm">
                <input type="text"
                       v-model="requestor"
                       class="form-control"
                       id="inputRequestor"
                       placeholder="Requestor" disabled>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputRequestedFor">Requested For</label>
              <div class="input-group input-group-sm">
                <input type="text"
                       v-model="requestedFor"
                       class="form-control"
                       id="inputRequestedFor"
                       :disabled="!isEditable"
                       placeholder="RequestedFor">
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputDepartment">Requestor Department</label>
              <div class="input-group input-group-sm">
                <select v-model="department"
                        class="form-control"
                        id="inputDepartment" disabled>
                  <option v-for="department in departments"
                          v-bind:key="department.id"
                          :value="department.id" >{{department.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputDepartmentFor">Requested For Department</label>
              <div class="input-group input-group-sm">
                <select v-model="departmentFor"
                        class="form-control"
                        :disabled="!isEditable"
                        id="inputDepartmentFor">
                  <option v-for="department in departments"
                          v-bind:key="department.id"
                          :value="department.id" >{{department.name}}</option>
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
                       v-model="totalAmount"
                       class="form-control"
                       id="inputTotalAmount"
                       placeholder="Total Amount" disabled>
              </div>
            </div>
          </div>
        </div>
        <PRItems :addBuyer="addBuyer"
                 :isEditable="isEditable"
                 v-on:update="updateTotalAmount"></PRItems>
        <br/>
        <button type="button" class="btn btn-primary btn-sm" @click="savePR">Save</button>
      </div>
      <div class="d-none d-xl-block col-xl-3 bd-toc doc-right">
        <ApprovalFlow></ApprovalFlow>
        <Comments></Comments>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import PRItems from './PRItems.vue';
import ApprovalFlow from '../Shared/ApprovalFlow.vue';
import Comments from '../Shared/Comments.vue';
import PR from '@/models/pr/pr';

@Component({
  components: {
    PRItems,
    ApprovalFlow,
    Comments,
  },
})

export default class PRDOC extends Vue {
  docDetails = new PR();

  orderType: string = 'Purchase';

  isAnnual: boolean = true;

  requestDate: string = '2018-12-29';

  requestedDate: string = '2018-12-29';

  project: number = 0;

  department: number = 1;

  departmentFor: number = 1;

  costCenter: number = 0;

  totalAmount: number = 0;

  requestor: string = 'Requestor';

  requestedFor: string = 'Requestor';

  addBuyer: boolean = false;

  isEditable: boolean = true;

  costCenters: any[] = [{
    id: 0, name: 'Select Cost Center',
  }, {
    id: 1, name: 'cc1',
  }, {
    id: 2, name: 'cc2',
  }];

  projects: any[] = [{
    id: 0, name: 'Select Project',
  }, {
    id: 1, name: 'project 1',
  }, {
    id: 2, name: 'project 2',
  }];

  departments: any[] = [{
    id: 0, name: 'department 1',
  }, {
    id: 1, name: 'department 2',
  }];

  savePR() {
    this.addBuyer = !this.addBuyer;
    this.isEditable = !this.isEditable;
    /* const PR = {
      Id: null,
      DocNumber: this.details.docNumber,
      DocStatus: this.details.status,
      RequestDate: this.details.requestDate,
      RequestedDate: this.details.requestedDate,
      DepartmentId: this.details.department,
      CostCenter: this.details.costCenter,
      Stock: this.details.costCenter,
      GINItems: null,
    };
    console.log(PR);
    axios.post('https://localhost:44357/api/gin/SavePR', {
      Item: 'green',
    })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      }); */
  }

  updateTotalAmount(totalAmount: number) {
    this.totalAmount = totalAmount;
  }

  async beforeCreate() {
    console.log(this.docDetails);
    this.docDetails.docStatus = 'hello';
    this.docDetails.docNumber = '123';
    console.log(this.docDetails);
  }
}
</script>

<style>
  .doc-right{
    border-left: 1px solid rgba(0,0,0,.1);
  }

  #documentForm{
    text-align: left;
  }
</style>
