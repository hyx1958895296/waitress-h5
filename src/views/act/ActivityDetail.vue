<template>
  <div class="wrap">
    <div class="wrap-top">
      <div class="header">
        <img src="../../assets/imgs/left_arrow.png" class="left_arrow-icon" />
        <div class="title">Mirror</div>
        <div></div>
      </div>
      <div class="strong-connection-ability">
        <div class="title">Strong connection ability</div>
        <div class="sub-title">Cloud projection</div>
        <img src="../../assets/imgs/s_c_a.png" class="s_c_a-icon" />
      </div>
    </div>
    <div class="wrap-bottom">
      <div class="remain-time">
        <div class="remain-time-text">Remaining time</div>
        <div class="time">
          <div class="time-item">6</div>
          <div class="time-item">6</div>
          <div class="time-item">9</div>
          <div class="hours-text">hours</div>
          <div class="time-item">3</div>
          <div class="time-item">8</div>
          <div class="minute-text">minute</div>
        </div>
      </div>
      <div class="content-prograss">
        <div class="prograss-minute">
          <div>200 minute in total</div>
          <div>46min</div>
        </div>
        <div class="prograss">
          <div class="left-prograss"></div>
          <div class="right-prograss"></div>
        </div>
      </div>
      <div class="content-prograss">
        <div class="prograss-hours">
          <div>200 minute in total</div>
          <div>46min</div>
        </div>
        <div class="prograss">
          <div class="left-prograss"></div>
          <div class="right-prograss"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  box-sizing: border-box;
  background-color: #cfd5fb;
  height: 100vh;
}
.wrap-top {
  padding: 2.4rem;
  border-radius: 3rem;
}
.header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 1.2rem 0;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.left_arrow-icon {
  width: 3.6rem;
  height: 3.6rem;
}
.title {
  font-size: 1.9rem;
  font-weight: 700;
}
.strong-connection-ability {
  background-color: #7565fa;
  padding: 2.6rem 2.8rem;
  border-radius: 3rem;
  height: 21.2rem;
  position: relative;
}
.strong-connection-ability .title {
  font-size: 2rem;
  color: #fff;
}
.sub-title {
  font-size: 1.6rem;
  color: #fff;
}
.s_c_a-icon {
  position: absolute;
  width: 25.6rem;
  height: 23.9rem;
}
.wrap-bottom {
  margin-top: 2.5rem;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 3rem;
}
.remain-time {
  background-color: #e7e3ff;
  padding: 2rem 0;
  border-radius: 3rem 3rem 0 0;
}
.remain-time-text {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 900;
}
.hours-text {
  font-size: 1.6rem;
  font-weight: 900;
}
.minute-text {
  font-size: 1.6rem;
  font-weight: 900;
}
.time {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.time-item {
  width: 2rem;
  height: 2.5rem;
  background-color: #7165ff;
  text-align: center;
  line-height: 2.5rem;
  font-size: 1rem;
  color: #fff;
}
.prograss-minute {
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 900;
}
.prograss {
  height: 0.5rem;
  display: flex;
}
.left-prograss {
  background-color: #7165ff;
  width: 50vw;
  border-radius: 1rem 0 0 1rem;
}
.right-prograss {
  background-color: #f3f3fb;
  width: 50vw;
  border-radius: 0rem 1rem 1rem 0rem;
}
.content-prograss{
  margin-bottom: 1.5rem;
}
.prograss-hours {
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 900;
}
</style>
