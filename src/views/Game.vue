<template>
  <div class="game container">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div id="scissor" class="col-md-4">
            <a href="#" @click="select('scissor', 1)">
              <img src="@/assets/scissor.jpg" alt="ini gunting" width="100px" height="100px">
            </a>
          </div>
          <div id="rock" class="col-md-4">
            <a href="#" @click="select('rock', 1)">
              <img src="@/assets/rock.jpg" alt="ini batu" width="100px" height="100px">
            </a>
          </div>
          <div id="paper" class="col-md-4">
            <a href="#" @click="select('paper', 1)">
              <img src="@/assets/paper.jpg" alt="ini kertas" width="100px" height="100px">
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div id="scissor" class="col-md-4">
            <a href="#" @click="select('scissor', 2)">
              <img src="@/assets/scissor.jpg" alt="ini gunting" width="100px" height="100px">
            </a>
          </div>
          <div id="rock" class="col-md-4">
            <a href="#" @click="select('rock', 2)">
              <img src="@/assets/rock.jpg" alt="ini batu" width="100px" height="100px">
            </a>
          </div>
          <div id="paper" class="col-md-4">
            <a href="#" @click="select('paper', 2)">
              <img src="@/assets/paper.jpg" alt="ini kertas" width="100px" height="100px">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: null,
      p2: null,
      readyState: false
    }
  },

  methods: {
    select(item, player) {
      console.log(item, player)
      player === 1 ? this.p1 = item : this.p2 = item
    },

    calculateScore() {

    }
  },

  watch: {
    p1() {
      this.p1 && this.p2 ? this.readyState = true : this.readyState = false
      console.log(this.readyState)
    },
    p2() {
      this.p1 && this.p2 ? this.readyState = true : this.readyState = false
      console.log(this.readyState)
    },
    readyState() {
      if (this.readyState) {
        this.readyState = false

        // ngirim ke socket
        
      }
    }
  }
}
</script>

