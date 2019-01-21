<template>
  <ul class="list-group">
    <li
      v-for="approver in approvers"
      :key="approver.roleName"
      class="list-group-item d-flex justify-content-between align-items-center py-2">
      {{ approver.roleName }}
      <span class="">
        <i class="fa fa-check" :style="{'color' : approver.approved ? 'green' : 'gray'}"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      approvers: [{
        roleName: 'Requestor', approved: true,
      }, {
        roleName: 'Line Manager', approved: true,
      }, {
        roleName: 'Procurement Manager', approved: false,
      }, {
        roleName: 'Buyer', approved: false,
      }],
    };
  },
};
</script>
