<template>
	<section :class="['playing-list', { isShow : !playingListIsShow }]">
    <div class="title">
      <div class="left">
        歌曲列表（{{ songList.length }}）
      </div>
      <div class="right">
        <span><i class="icon icon-add allAdd"></i>收藏全部</span>
        <i class="icon icon-delete allDelete"></i>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) in songList"
          :key="index"
          @click="setPlaying(index)">
        <i class="icon icon-close"></i>
        <p>
          <i v-if="index == playingIndex" class="icon icon-volume-medium"></i>
          {{ item.name }}
          <span>-{{ item.singer }}</span>
        </p>
      </li>
    </ul>
    <div class="closelist" @click="hidePageCoverAction">
      关闭
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
	export default {
		name: "playing-list",
    computed: {
      ...mapState({
        playingListIsShow: state => state.listening.playingListIsShow,
        songList: state => state.listening.songList,
        playingIndex: state => state.listening.playingIndex
      })
    },
    methods: {
      ...mapActions([
        'hidePageCoverAction',
        'updatePlayingAction',
        'updatePlayingIndexAction'
      ]),
      setPlaying(index) {
        this.updatePlayingIndexAction(index);
        this.updatePlayingAction(this.songList[index]);
      }
    }
	}
</script>

<style lang="scss" scoped>
 .playing-list{
   @include fixed-point(101,bottom);
   width: 100%;
   max-height: 65vh;
   min-height: 45vh;
   transition: all .5s ease-in-out;
   background: rgba(255,255,255,.9);
   border-radius: 10px 10px 0 0;
   padding-bottom: 44px;
   @include isShow(Y, 110%, .5s, ease-out);
   >.title{
     height: 40px;
     line-height: 40px;
     border-bottom: 1px solid #ccc;
     >.left{
       float: left;
       margin-left: 10px;
     }
     >.right{
       float: right;
       margin-right: 10px;
       >span{
         margin-right: 20px;
         >.allAdd{
           font-size: 1.4rem;
           margin-right: 5px;
           vertical-align: middle;
         }
       }
       >i{
         font-size: 1.7rem;
         vertical-align: middle;
       }
     }
   }
   >.list{
     >li{
       height: 35px;
       line-height: 35px;
       margin: 3px 10px 0;
       border-bottom: 1px solid #ccc;
       >p{
         display: inline-block;
         max-width: 85vw;
         @include text-overflow;
         >i{
           color: $mainColor;
         }
         >span{
           font-size: 1.2rem;
           color: #888;
           margin-left: 8px;
         }
       }
       >i{
         float: right;
         line-height: 35px;
         padding-left: 8px;
       }
     }
   }
   >.closelist{
     @include fixed-point(101, bottom);
     right: 0;
     text-align: center;
     height: 45px;
     line-height: 45px;
     background: rgba(249, 249, 249, 0.8);
     border-top: 1px solid #d6d6d6;
   }
 }
</style>
