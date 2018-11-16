<template>
  <div class="home">
    <audio autoplay loop>
      <source src="../assets/audio/otter-opop.mp3" type="audio/mpeg">
      Your browser doesn't support audio!
    </audio>
    <!-- <button class="btn btn-primary btn-sm" @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"><span class="fa fa-play-circle-o"></span></button> -->
    <div>
      <h2>Please join a room</h2>
    </div>
    <div>
    <input v-model="insertName"
                  type="text"
                  placeholder="Insert your name here..." />
    <p>Player {{ insertName.toUpperCase() }}</p>
  </div>
    <br>
    <div class="flex-container" id="inventory" >
      <div class="row">
        <div class="col-md-3">
            <div class="card">
              <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
              <button class="btn btn-danger view-btn">DANGER</button>
              <div class="ribbon"><span>1/2</span></div>
            </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
            <button class="btn view-btn">CAUTION</button>
            <div class="ribbon"><span>1/2</span></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
            <button class="btn view-btn">SICK</button>
            <div class="ribbon"><span>2/2</span></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
            <button class="btn view-btn">EASY</button>
            <div class="ribbon"><span>1/2</span></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
            <button class="btn btn-danger view-btn">BOFF</button>
            <div class="ribbon"><span>0/2</span></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="img-fluid" src="../assets/picts/angrybird.png" alt="Card image cap">
            <button class="btn btn-danger view-btn">DEATH</button>
            <div class="ribbon"><span>0/2</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>

</style>

<script>
export default {
  name: 'home',
  data () {
    return {
      insertName: '',
    }
  },
  // mounted: {
  //   playSound()
  // },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
}
</script>
