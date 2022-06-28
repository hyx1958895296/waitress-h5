<template>
  <div class="wrap-content">
    <div class="wrap">
      <div class="header">
        <img src="../../assets/imgs/left_arrow.png" class="left_arrow-icon" />
        <div class="title">Local screencast</div>
        <div></div>
      </div>
      <div class="search">
        <input type="text" class="search-inp" placeholder="search" />
        <div class="search_icon-div">
          <img src="../.././assets/imgs/search_icon.png" class="search-icon" />
          <div></div>
        </div>
      </div>
      <div class="mirror-guide-content">
        <img src="../../assets/imgs/waaw.png" class="mirror-guide-icon" />
        <div class="mirror-guide">
          <div></div>
          <div>
            <div class="mirror-guide-text">Mirror guide</div>
            <div class="common-problem-text">common Problem</div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-item">
        <div class="picture">
          <img src="../../assets/imgs/picture.png" class="picture_icon" />
        </div>
        <div class="picture-text">Picture</div>
        <div class="local-screen-cast">Local screencast</div>
      </div>
      <div class="carousel-item">
        <div class="picture">
          <img src="../../assets/imgs/picture.png" class="picture_icon" />
        </div>
        <div class="picture-text">Picture</div>
        <div class="local-screen-cast">Local screencast</div>
      </div>
      <div class="carousel-item">
        <div class="picture">
          <img src="../../assets/imgs/picture.png" class="picture_icon" />
        </div>
        <div class="picture-text">Picture</div>
        <div class="local-screen-cast">Local screencast</div>
      </div>
      <div class="carousel-item">
        <div class="picture">
          <img src="../../assets/imgs/picture.png" class="picture_icon" />
        </div>
        <div class="picture-text">Picture</div>
        <div class="local-screen-cast">Local screencast</div>
      </div>
    </div>
    <div class="screen-mirror-wrap-content">
      <div class="screen-mirror">
        <div class="video">
          <div></div>
          <img src="../../assets/imgs/video_icon.png" class="video_icon" />
        </div>
        <div class="screen-mirror-content">
          <div class="online-video">Online video</div>
          <div class="sub-title-second">cast online videos to TV</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div class="time-out btn">
        <img src="../../assets/imgs/transmit.png" class="btn_icon"/>
        <div>Time out</div>
      </div>
      <div class="end btn">
        <img src="../../assets/imgs/open.png" class="btn_icon"/>
        <div>End</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap-content {
  background-color: #dbcbf7;
  border-radius: 2rem 2rem;
}
.wrap {
  padding: 2.4rem 2.4rem 0rem 2.4rem;
}
.header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 1.2rem 0;
  align-items: center;
  text-align: center;
}
.search {
  padding: 1rem 0rem;
  background-color: #efeffb;
  display: grid;
  grid-template-columns: 5fr 1fr;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
}
.search-inp {
  height: 3rem;
  outline: none;
  border: none;
  text-indent: 2em;
  background-color: #efeffb;
  border-radius: 3rem;
  font-size: 1.6rem;
}
.search_icon-div {
  display: flex;
  align-items: center;
}
.search-icon {
  width: 3rem;
  height: 3rem;
}
.left_arrow-icon {
  width: 3.6rem;
  height: 3.6rem;
}
.title {
  font-size: 1.9rem;
  font-weight: 700;
}
.third-icon {
  width: 10rem;
  height: 12.1rem;
}
.mirror-guide-content {
  position: relative;
}
.mirror-guide {
  margin: 3rem 0;
  padding: 3rem 0rem;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  align-items: center;
  background-color: #efebff;
  border-radius: 12rem;
}
.mirror-guide-icon {
  width: 10rem;
  height: 12.1rem;
  position: absolute;
  left: 3rem;
  bottom: 0.7rem;
}
.mirror-guide-text {
  font-size: 2.4rem;
  font-weight: 900;
}
.common-problem-text {
  font-size: 1.6rem;
}
.carousel {
  padding-left: 2.4rem;
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  background-color: #dbcbf7;
  border-radius: 0rem 0rem 2rem 2rem;
}
.carousel-item {
  padding: 2rem 0;
  border-radius: 3rem;
  min-width: 17.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7469fd;
}
.picture {
  height: 4.8rem;
  background-color: #d3d7ff;
  padding: 1.6rem;
  border-radius: 3rem;
}
.picture_icon {
  width: 4.8rem;
  height: 4.8rem;
}
::-webkit-scrollbar {
  display: none;
}
.picture-text {
  padding: 1.2rem 0rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
}
.local-screen-cast {
  font-size: 1.8rem;
  color: #9b93fb;
}
.screen-mirror-wrap-content {
  padding: 3.7rem 2.4rem;
}
.screen-mirror {
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1.5rem;
  border-radius: 2rem;
  align-items: center;
  padding: 1.8rem;
  margin: 1rem 0;
  background-color: #fffffb;
}
.online-video {
  font-size: 2.1rem;
  padding: 1rem 0;
  font-weight: 900;
}
.sub-title-second {
  font-size: 1.8rem;
  color: #bfc5ce;
}
.video {
  width: 6rem;
  height: 6rem;
  background-color: #7165fb;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff763b;
}
.video_icon {
  width: 4rem;
  height: 4rem;
}
.btns {
  padding: 0rem 2.4rem 4rem 2.4rem;
  display: flex;
  justify-content: space-between;
}
.btn {
  display: flex;
  padding: 1.7rem 2.4rem;
  align-items: center;
  background-color: #fff;
  border-radius: 5rem;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
}
.btn_icon{
    width: 3.6rem;
    height: 3.6rem;
}
</style>