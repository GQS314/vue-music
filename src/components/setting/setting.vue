<template>
  <section class="setting">
    <div class="s-main">
      <header class="s-head">
        <img title="头像" src="http://p2.music.126.net/5DBXLU9hhfXg6j9ZTM_mBg==/3368903628505666.jpg?param=180y180" alt="userImg">
        <div class="s-info">
          <span class="s-name">过去式</span>
          <img title="VIP" src="data:image/png;base64,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" alt="VIP">
          <span class="s-lv">Lv.10</span>
        </div>
        <span class="s-sign">
        <i class="icon-coin"></i>
        签到
      </span>
      </header>
      <section class="s-content">
        <ul>
          <li is="menu-list"
              v-for="(item, index) in meunlist"
              :key="index"
              :item="item"></li>
        </ul>
      </section>
      <footer class="s-foot">
        <ul>
          <li>
            <i class="icon-night"></i>
            <span>夜间模式</span>
          </li>
          <li>
            <i class="icon-exit"></i>
            <span>退出账号</span>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<script>
  import MenuList from './menu-list'
  export default {
    name: "setting",
    data() {
      return {
        meunlist: [
          { icon: 'message', title: '我的消息', tip: '', next: 1 },
          { icon: 'vip', title: '我的会员', tip: '2018.05.10到期', next: 1 },
          { icon: 'market', title: '商城', tip: '', next: 0 },
          { icon: 'friend', title: '我的好友', tip: '', next: 1 },
          { icon: 'place', title: '附近的人', tip: '', next: 0 },
          { icon: 'theme', title: '个性换肤', tip: '官方红', next: 1 },
          { icon: 'set-time', title: '定时播放', tip: '', next: 1 },
          { icon: 'lock', title: '音乐闹钟', tip: '', next: 1 },
          { icon: 'car', title: '驾驶模式', tip: '', next: 1 },
          { icon: 'cloud', title: '音乐云盘', tip: '', next: 1 }
        ]
      }
    },
    components: {
      MenuList
    }
  }
</script>

<style lang="scss" scoped>
  .setting{
    min-height: 100%;
    background-color: #fff;
    @include absolute-point(101);
    overflow: hidden scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    >.s-main{
      width: 280px;
      padding-bottom: $f-heigth;
      >.s-head{
        height: 170px;
        background: url("https://gqs314.github.io/demo/images/1441531640728.jpg") no-repeat fixed;
        background-size: 280px 170px;
        position: relative;
        >img{
          width: 56px;
          height: 56px;
          border-radius: 50%;
          @include absolute-point(101,60px,18px);
        }
        >.s-info{
          @include absolute-point(101,133px,18px);
          line-height: 1.7rem;
          >img{
            width: 15px;
            height: 15px;
            margin: 0 6px 3px;
          }
          >span{
            color: #eee;
          }
          >.s-name{
            font-size: 1.7rem;
            display: inline-block;
            max-width: 108px;
            @include text-overflow;
            float: left;
          }
          >.s-lv{
            font-size: 1.3rem;
            padding: 0 3px;
            border: 1px solid #eee;
            border-radius: 8px;
          }
        }
        >.s-sign{
          @include absolute-point(101,130px,200px);
          border: 1px solid #eee;
          border-radius: 12px;
          color: #eee;
          display: block;
          height: 25px;
          line-height: 25px;
          padding: 0 8px;
          background-color: rgba(0,0,0,0.2);
          cursor: pointer;
        }
      }
      >.s-foot{
        @include fixed-point(100, bottom);
        width: 280px;
        border-top: 1px solid rgba(7,17,27,.1);
        background-color: #fff;
        >ul{
          display: flex;
          justify-content: space-between;
          >li{
            height: 40px;
            line-height: 40px;
            padding: 0 8px;
            cursor: pointer;
            color: #666;
          }
        }
      }
    }
  }
</style>
