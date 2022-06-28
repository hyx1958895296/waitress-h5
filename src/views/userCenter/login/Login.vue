<template>
  <div class="wrap-content">
    <div class="wrap">
      <img src="../../../assets/imgs/login_logo.png" class="img" />
      <div class="morror-cast-screen">Mirroring Cast screen</div>
      <div class="real-time-screen-share">Real-time screen sharing</div>
    </div>
    <div class="bottom">
      <div class="bottom-content">
        <div class="place-choose">
          <div class="title">Place choose</div>
          <div>choose a screencast scene</div>
        </div>
        <div class="information_icon">
          <img src="../../../assets/imgs/information.png" class="info_icon" />
        </div>
      </div>
      <div class="screen-mirror">
        <div class="video">
          <div></div>
          <img src="../../../assets/imgs/video_icon.png" class="video_icon" />
        </div>
        <div class="screen-mirror-content">
          <div class="online-video">Online video</div>
          <div class="sub-title-second">cast online videos to TV</div>
        </div>
      </div>
      <div class="screen-mirror">
        <div class="video">
          <div></div>
          <img src="../../../assets/imgs/video_icon.png" class="video_icon" />
        </div>
        <div class="screen-mirror-content">
          <div class="online-video">Online video</div>
          <div class="sub-title-second">cast online videos to TV</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap-content {
  background-color: #7165fb;
  border-radius: 3rem;
  display: grid;
}
.wrap {
  padding: 1.4rem 2.4rem 0rem 2.4rem;
  box-sizing: border-box;
  border-radius: 3rem;
  background-image: url(../../../assets/imgs/bg_color_icon.png);
}
.img {
  width: 2.4rem;
  height: 2rem;
  padding: 1rem 0rem;
}
.morror-cast-screen {
  color: #fffffb;
  font-size: 2.3rem;
  font-weight: 900;
  padding: 0.8rem;
}
.real-time-screen-share {
  padding: 0 1.2rem;
  color: #fffffb;
  font-size: 1.8rem;
  background-image: url(../../../assets/imgs/tv-characters.png);
  transform: scale(1);
  background-size: 26.6rem 30rem;
  background-position-x: 3rem;
  background-repeat: no-repeat;
  height: 23.5rem;
}
.bottom {
  background-color: rgba(132, 120, 227, 0.7);
  border-radius: 3rem;
  padding: 0rem 2rem 2rem 2rem;
}
.bottom-content {
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
}
.place-choose {
  font-size: 1.8rem;
  color: #fffffb;
}
.title {
  font-size: 2rem;
  color: #fffffb;
  font-weight: 700;
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
.screen-mirror-content {
  background-color: #fffffb;
}
.online-video {
  font-size: 2.1rem;
  font-weight: 900;
}
.sub-title-second {
  font-size: 1.8rem;
  color: #bfc5ce;
}
.information_icon {
  padding: 2.5rem 0;
}
.info_icon {
  color: #fffffb;
  width: 2.8rem;
  height: 2.8rem;
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
.yuan1_icon {
  width: 6rem;
  height: 6rem;
}
</style>