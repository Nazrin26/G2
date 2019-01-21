<template>
  <div class="detailBox">
    <div class="actionBox">
      <ul class="commentList">
        <li
          v-for="comment in comments"
          :key="comment.comment"
        >
          <div class="commentText">
            <p class="">{{ comment.comment }}.</p>
            <span class="date sub-text">{{ comment.date }}</span>
          </div>
        </li>
      </ul>
      <form class="form-inline" role="form">
        <div class="form-group">
          <input class="form-control" v-model="comment" type="text" placeholder="Your comments" />
        </div>
        <div class="form-group">
          <button class="btn btn-default" @click="addComment">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
      date: '2019-01-11',
      comments: [{
        comment: 'Comment 1', date: '2018-12-29',
      }, {
        comment: 'Comment 2', date: '2019-01-04',
      }],
    };
  },
  methods: {
    addComment() {
      const comment = {
        id: 1,
        comment: this.comment,
        date: this.date,
      };
      this.$store.dispatch('addComment', comment)
        .then(() => {
          this.comment = '';
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
  .detailBox {
    margin-top: 40px;
    border:1px solid #bbb;
  }
  .titleBox {
    background-color:#fdfdfd;
    padding:10px;
  }
  .titleBox label{
    color:#444;
    margin:0;
    display:inline-block;
  }

  .commentBox {
    padding:10px;
    border-top:1px dotted #bbb;
  }
  .commentBox .form-group:first-child, .actionBox .form-group:first-child {
    width:80%;
  }
  .commentBox .form-group:nth-child(2), .actionBox .form-group:nth-child(2) {
    width:18%;
  }
  .actionBox .form-group * {
    width:100%;
  }
  .taskDescription {
    margin-top: 10px;
  }
  .commentList {
    padding:0;
    list-style:none;
    max-height:200px;
    overflow:auto;
  }
  .commentList li {
    margin:0;
    margin-top:10px;
  }
  .commentList li > div {
    display:table-cell;
  }
  .commenterImage {
    width:30px;
    margin-right:5px;
    height:100%;
    float:left;
  }
  .commenterImage img {
    width:100%;
    border-radius:50%;
  }
  .commentText p {
    margin:0;
  }
  .sub-text {
    color:#aaa;
    font-family:verdana;
    font-size:11px;
  }
  .actionBox {
    border-top:1px dotted #bbb;
    padding:10px;
  }
</style>
