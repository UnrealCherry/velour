<template>
<div class="book-wrapper">
<div v-for="book in books" :key="book.name" class="book-margin" @click="goBook">
  <div class="book-flex">
    <div class="cover" ><img :src="book.cover" ></div>
    <div class="contents">
      <div >
        <b class="title">{{book.name}}</b>
        <span :class="'label label-'+labels.color" v-for="labels in book.label" :key="labels.name"> {{labels.name}}</span>
      </div>
     <div class="authous">作者:{{book.authou}}</div>
      <p class="describe">{{book.describe}}</p>
      <div class="icon-bag">
        <span class="round-icon" v-for="b in  book.bottom" :key="b">
          <span>{{b}}</span>
        </span>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      books: [
        { name: '我的英雄学院',
          label: [{color: 'red', name: '热门'}, {color: 'blue', name: '连载'}],
          cover: require('@/assets/covers/hero.jpg'),
          authou: 'plus',
          describe: '百度百科是一部内容开放、自由的网络百科全书,旨在创造一个涵盖所有领域知识,服务所有互联网用户的中文知识性百科全书。在这里你可以参与词条编辑,分享贡献你的知识。',
          bottom: ['快乐', '开心', '逗比']
        },
        { name: 'my hero1',
          label: [{color: 'red', name: '热门'}, {color: 'blue', name: '连载'}],
          cover: require('@/assets/covers/hero.jpg'),
          authou: 'plus',
          describe: '百度百科是一部内容开放、自由的网络百科全书,旨在创造一个涵盖所有领域知识,服务所有互联网用户的中文知识性百科全书。在这里你可以参与词条编辑,分享贡献你的知识。',
          bottom: ['快乐', '开心', '逗比']
        },
        { name: 'my hero2',
          label: [{color: 'red', name: '热门'}, {color: 'blue', name: '连载'}],
          cover: require('@/assets/covers/hero.jpg'),
          authou: 'plus',
          describe: '百度百科是一部内容开放、自由的网络百科全书,旨在创造一个涵盖所有领域知识,服务所有互联网用户的中文知识性百科全书。在这里你可以参与词条编辑,分享贡献你的知识。',
          bottom: ['快乐', '开心', '逗比']
        },
        { name: 'my hero3',
          label: [{color: 'red', name: '热门'}, {color: 'blue', name: '连载'}],
          cover: require('@/assets/covers/hero.jpg'),
          authou: 'plus',
          describe: '百度百科是一部内容开放、自由的网络百科全书,旨在创造一个涵盖所有领域知识,服务所有互联网用户的中文知识性百科全书。在这里你可以参与词条编辑,分享贡献你的知识。',
          bottom: ['快乐', '开心', '逗比']
        }
      ]
    }
  },
  methods: {
    goBook () {
      this.$router.push('/book')
    }
  }
}
</script>
<style lang="scss" scoped>
  .book-wrapper{
    padding: 30px;
    font-size: 21px;
  .book-margin{
    margin-top: 20px;
  }
    .title{
      font-size: 30px;
    }
.book-flex{
  display: flex;
  .cover{
    width: 165px;
    height: 220px;
    overflow: hidden;
    object-fit: cover;
    @include  cement(1)
  }
  .contents {
    margin-left: 24px;
    width: 500px;
    text-align: left;
    display: flex;
    flex-direction: column;
    .label {
      padding: 2px;
      margin-left: 10px;
    }
    .label-blue{
      background: #4957ff;
      color: white;
    }
    .label-red{
      background: #ff512c;
      color: white;
    }
    .describe{
    @include  textEllipsis(3)
    }
    .icon-bag{
      flex: 1;
      display: flex;
      align-items:flex-end;
      .round-icon{
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: block;
        border-radius: 20px;
        border: 1px #1b1b2a solid;
        margin-left: 20px;
        span {
          display: block;
          transform: scale(0.8);
        }
      }
    }

    .authous{

    }
  }
}
  }
</style>
