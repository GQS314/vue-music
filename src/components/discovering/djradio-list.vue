<template>
  <section class="djradio-list">
    <banner :items="bannerList"></banner>
    <ul class="tabbar">
      <li>
        <i class="icon icon-diantai"></i>
        <span>电台分类</span>
      </li>
      <li class="line">
        <div></div>
      </li>
      <li>
        <i class="icon icon-rank-list"></i>
        <span>电台分类</span>
      </li>
    </ul>
    <djradio-list-premium :premiumList="premiumList"></djradio-list-premium>
    <recommend-list v-for="(item,index) in djRecommend"
                    :key="index"
                    :items="item"></recommend-list>
  </section>
</template>

<script>
  import Banner from '../common/banner'
  import DjradioListPremium from './djradio-list-premium'
  import RecommendList from './recommend-list'
  export default {
    name: "djradio-list",
    data() {
      return {
        bannerList: [
          {title: '霉霉', type: 10, link: '', imgUrl: 'http://p1.music.126.net/GN7YMF1ShhUufe3voJUOSQ==/109951163298385924.jpg'},
          {title: '薛之谦', type: 11, link: '', imgUrl: 'http://p1.music.126.net/clrG9QrRS11UmoyAAEndRQ==/109951163298201001.jpg'},
          {title: '花粥', type: 12, link: '', imgUrl: 'http://p1.music.126.net/NXrgfWE4-0ECCYmR3yjI2A==/109951163298218361.jpg'},
          {title: '张雪迎', type: 13, link: '', imgUrl: 'http://p1.music.126.net/P-m1PlGa4FU_VCN1yOBnnQ==/109951163298194777.jpg'},
          {title: '风子', type: 14, link: '', imgUrl: 'http://p1.music.126.net/y9SPAXaJocCKCLdHIXbtTQ==/109951163298445840.jpg'}
        ],
        premiumList: {
          title: '付费精品',
          list: [
            {
              title: '听歌学英文',
              text: '用一首歌的时间学英文',
              tip: '友邻优客课程《听歌学英文》推荐曲目整理',
              money: '99',
              update: '5月14日更新',
              imgUrl: 'http://p3.music.126.net/UhFTkAsX7QnDyJtHTCTcqg==/19178781323873177.jpg?param=200y200'
            },
            {
              title: '采铜·好书精读',
              text: '每周帮你消化一本好书',
              tip: '《千面英雄》：怎样理解“音乐也是一种神话”',
              money: '99',
              update: '5月11日更新',
              imgUrl: 'http://p1.music.126.net/9dZAECeuh6-jPkU9KFq6kw==/109951163008457111.jpg?param=200y200'
            },
            {
              title: '即学即用的谈判课',
              text: '每天十分钟，用谈判破解一种难题',
              tip: '【要点 战术】什么时候，你可以强硬一点',
              money: '129',
              update: '5月11日更新',
              imgUrl: 'http://p1.music.126.net/TzU64fIDq6D0e356TdPVhg==/109951163287044703.jpg?param=200y200'
            }
          ]
        },
        djRecommend: [
          {
            title: '电台个性推荐',
            list: [
              {
                text: '「四季情诗」穿越四季的爱恋',
                imgUrl: 'http://p1.music.126.net/dpMOpjhBe864dTXA3e4IDA==/19184278882035262.jpg?param=140y140',
                link: '',
                tip: '69万万万万万万万万万万万万'
              },
              {
                text: 'Tropic House‖夏日清新电子',
                imgUrl: 'http://p1.music.126.net/Iep7e47HWG5l1aWYo_qACw==/18988565812110451.jpg?param=140y140',
                link: '',
                tip: '46万'
              },
              {
                text: '华语｜那些温暖男声听起来总让人心疼',
                imgUrl: 'http://p1.music.126.net/1sTMKmvEcyZTsRVs3ILrKA==/18767563976189991.jpg?param=140y140',
                link: '',
                tip: '5408万'
              },
              {
                text: '自然音 | 雨、海、江河，静谧水之旅',
                imgUrl: 'http://p1.music.126.net/gmq-h7TS2ggQxidHrb2M5A==/109951163119767260.jpg?param=140y140',
                link: '',
                tip: '10万'
              },
              {
                text: '小时候最害怕的几部电视剧，简直童年阴影！',
                imgUrl: 'http://p1.music.126.net/nXZz7uJFxBVoUEGhyU_ySg==/109951163290374724.jpg?param=140y140',
                link: '',
                tip: '14257'
              },
              {
                text: '最爱韩剧 今生第一次',
                imgUrl: 'http://p1.music.126.net/b9XTKKb6muThsihyNqKrdQ==/109951163056735284.jpg?param=140y140',
                link: '',
                tip: '12338'
              }
            ]
          },
          {
            title: '知识技能',
            list: [
              {
                text: '「四季情诗」穿越四季的爱恋',
                imgUrl: 'http://p1.music.126.net/dpMOpjhBe864dTXA3e4IDA==/19184278882035262.jpg?param=140y140',
                link: '',
                tip: '69万'
              },
              {
                text: 'Tropic House‖夏日清新电子',
                imgUrl: 'http://p1.music.126.net/Iep7e47HWG5l1aWYo_qACw==/18988565812110451.jpg?param=140y140',
                link: '',
                tip: '46万'
              },
              {
                text: '华语｜那些温暖男声听起来总让人心疼',
                imgUrl: 'http://p1.music.126.net/1sTMKmvEcyZTsRVs3ILrKA==/18767563976189991.jpg?param=140y140',
                link: '',
                tip: '5408万'
              }
            ]
          }
        ]
      }
    },
    components: {
      Banner,
      DjradioListPremium,
      RecommendList
    }
  }
</script>

<style lang="scss" scoped>
  .djradio-list{
    padding-bottom: $f-heigth;
    >.tabbar{
      display: flex;
      align-items: stretch;
      border: 1px solid $lineColor;
      >li{
        height: 50px;
        flex: 100;
        text-align: center;
        display: flex;
        justify-content: center;
        color: #333;
        >i{
          font-size: 2.7rem;
          line-height: 50px;
          margin-right: 7px;
        }
        >span{
          line-height: 50px;
        }
      }
      >.line{
        flex: 1;
        >div{
          width: 1px;
          height: 30px;
          background: $lineColor;
          margin: 10px auto;
        }
      }
    }
  }
</style>
