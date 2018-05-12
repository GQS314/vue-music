<template>
  <section class="track-list">
    <ul class="list">
      <li v-for="(item, index) in trackList"
          :key="index">
        <div class="userImg"
             :style="{ backgroundImage: 'url(' + item.userImgUrl + ')' }">
          <div class="vip"></div>
        </div>
        <div class="content">
          <div class="header">
            <div class="star">
              <i class="icon icon-close"></i>
              <span>关注</span>
            </div>
            <div class="trackInfo">
              <p>
                <span class="name">{{ item.name }}</span>
                <span class="type">{{ item.type }}:</span></p>
              <p class="time">{{ item.time }}</p>
            </div>
          </div>
          <div class="trackBody">
            <p>{{ item.text }}</p>
            <div v-if="item.type=='发布动态'" class="imglist"></div>
            <div v-if="item.type=='分享音乐'" class="music"></div>
            <div v-if="item.type=='发布视频'"
                 class="video"
                 :style="{ backgroundImage: 'url(' + item.video.videoImg + ')' }">
              <div class="cover"></div>
              <div class="playdetail">
                <i class="icon icon-playdetail"></i>
              </div>
              <div class="videoInfo">
                <span class="play">
                  <i class="icon icon-play"></i>
                  {{ item.video.play }}
                </span>
                <span class="time">{{ item.video.time }}</span>
              </div>
            </div>
            <p class="videoTip">{{ item.video.tip }}</p>
          </div>
          <ul class="footer">
            <li class="likes">
              <i class="icon icon-like"></i>
              <span>{{ item.likes }}</span>
            </li>
            <li class="msg">
              <i class="icon icon-menu"></i>
              <span>{{ item.msg }}</span>
            </li>
            <li class="share">
              <i class="icon icon-cloud"></i>
              <span>{{ item.share }}</span>
            </li>
            <li class="more">
              <i class="icon icon-list-circle-small"></i>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
	export default {
		name: "track-list",
    props: ['trackList']
	}
</script>

<style lang="scss" scoped>
  .track-list{
    margin-top: 15px;
    border-top: 1px solid $lineColor;
    >.list{
      >li{
        border-bottom: 1px solid $lineColor;
        overflow: hidden;
        padding: 10px 0;
        >.userImg{
          float: left;
          width: 12vw;
          height: 12vw;
          background-position: center;
          background-size: cover;
          border-radius: 50%;
          margin: 10px;
        }
        >.content{
          float: left;
          width: 80%;
          >.header{
            margin-top: 10px;;
            >.star{
              float: right;
              background: #3e4357;
              color: #eee;
              height: 22px;
              line-height: 23px;
              padding: 0 8px;
              border-radius: 12px;
              font-size: 1.2rem;
              >i{
                transform: rotate(45deg);
                margin-right: 2px;
              }
            }
            >.trackInfo{
              >p{
                font-size: 1.4rem;
                >.name{
                  max-width: 40vw;
                  float: left;
                  @include text-overflow;
                  color: #0088cc;
                }
                >.type{
                  margin-left: 8px;
                }
              }
              >.time{
                font-size: 1.2rem;
                color: #999;
              }
            }
          }
          >.trackBody{
            width: 100%;
            margin-top: 15px;
            >div{
              width: 100%;
              height: 45vw;
              background-position: center;
              background-size:cover;
              position: relative;
              border-radius: 5px;
              margin-top: 5px;
              >.cover{
                @include cover(0.6);
                border-radius: 5px;
              }
              >.playdetail{
                width: 50px;
                height: 50px;
                @include absolute-point(1, 50%, 50%);
                border-radius: 26px;
                margin: -26px 0 0 -26px;
                &:hover,&:active{
                  background: rgba(0,0,0,.4);
                }
                >i{
                  font-size: 5rem;
                  color: #dddddd;
                }
              }
              >.videoInfo{
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                color: #eee;
                >span{
                  margin: 0 8px 0;
                  font-size: 1.3rem;
                  >i{
                    font-size: 1.2rem;
                  }
                }
                >.time{
                  float: right;
                }
              }
            }
            >.videoTip{
              max-width: 70vw;
              color: #999;
              font-size: 1.3rem;
              margin-top: 5px;
              @include text-overflow;
            }
          }
          >.footer{
            margin-top: 15px;
            display: flex;
            >li{
              flex: 1;
              color: #999;
              height: 30px;
              >span{
                font-size: 1.2rem;
                line-height: 30px;
              }
              >i{
                line-height: 30px;
                vertical-align: bottom;
              }
              &.likes{
                >i{
                  font-size: 1.4rem;
                }
              }
              &.msg{
                >i{
                  font-size: 1.6rem;
                }
              }
              &.share{
                >i{
                  font-size: 2rem;
                }
              }
              &.more{
                text-align: right;
                >i{
                  margin-right: 5px;
                  font-size: 2rem;
                  transform: rotate(90deg);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
