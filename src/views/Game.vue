<template>
  <div class="game container">
    <div class="row">
      <div class="col-md-6">

        <h1>
          Player One Health: {{ lives.p1 }}
        </h1>

        <h1 v-if="readyState">
          You picked {{ p1 }}
        </h1>  
        <div class="row">
          <div id="scissor" class="col-md-4" v-if="!readyState || !p1 || p1 === 'scissor'">
            <a href="#" @click="select('scissor', 1)">
              <img src="@/assets/scissor.jpg" alt="ini gunting" width="100px" height="100px">
            </a>
          </div>
          <div id="rock" class="col-md-4" v-if="!readyState || !p1 || p1 === 'rock'">
            <a href="#" @click="select('rock', 1)">
              <img src="@/assets/rock.jpg" alt="ini batu" width="100px" height="100px">
            </a>
          </div>
          <div id="paper" class="col-md-4" v-if="!readyState || !p1 || p1 === 'paper'">
            <a href="#" @click="select('paper', 1)">
              <img src="@/assets/paper.jpg" alt="ini kertas" width="100px" height="100px">
            </a>
          </div>
        </div>
      </div>

      <div class="col-md-6">
      
      <h1>
        Player Two Health: {{ lives.p2 }}
      </h1>

      <h1 v-if="readyState">
        You picked {{ p2 }}
      </h1>  
        <div class="row">
          <div id="scissor" class="col-md-4" v-if="!readyState || p2 === 'scissor'">
            <a href="#" @click="select('scissor', 2)">
              <img src="@/assets/scissor.jpg" alt="ini gunting" width="100px" height="100px">
            </a>
          </div>
          <div id="rock" class="col-md-4" v-if="!readyState || p2 === 'rock'">
            <a href="#" @click="select('rock', 2)">
              <img src="@/assets/rock.jpg" alt="ini batu" width="100px" height="100px">
            </a>
          </div>
          <div id="paper" class="col-md-4" v-if="!readyState || p2 === 'paper'">
            <a href="#" @click="select('paper', 2)">
              <img src="@/assets/paper.jpg" alt="ini kertas" width="100px" height="100px">
            </a>
          </div>
        </div>
      </div>

      <div class="col-12" v-if="readyState">
        <h1 class="text-center" v-if="winner !== 'tie' && readyState">
          Player {{ winner }} wins!
        </h1>
        <h1 class="text-center" v-else>
          Nobody wins :/
        </h1>
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
      readyState: false,
      winner: null,
      lives: {
        p1: 3,
        p2: 3
      }
    }
  },

  methods: {
    select(item, player) {
      console.log(item, player)
      player === 1 ? this.p1 = item : this.p2 = item
    },

    calculateScore() {
      if (this.winner === 'One') {
        this.lives.p2 -= 1
      } else {
        this.lives.p1 -= 1
      }
    }
  },

  watch: {
    p1() {
      this.p1 && this.p2 ? this.readyState = true : this.readyState = false
    },
    p2() {
      this.p1 && this.p2 ? this.readyState = true : this.readyState = false
    },
    readyState() {
      if (this.readyState) {
        console.log(`udah ready bos`)

        // logic buat ngitung score
        let p1 = this.p1,
            p2 = this.p2
        
        // nandain pemenang
        if (p1 === p2) {
          this.winner = "tie"
        } else {
          if (p1 === 'scissor' && p2 === 'rock') this.winner = 'Two'
          if (p1 === 'scissor' && p2 === 'paper') this.winner = 'One'
          if (p1 === 'paper' && p2 === 'rock') this.winner = 'One'
          if (p1 === 'paper' && p2 === 'scissor') this.winner = 'Two'
          if (p1 === 'rock' && p2 === 'scissor') this.winner = 'One'
          if (p1 === 'rock' && p2 === 'paper') this.winner = 'Two'
        }

        // ngurangin nyawa
        this.calculateScore()

        // balikin ke tadi
        setTimeout(() => { 
          this.p1 = ''
          this.p2 = ''
          this.winner = ''
          console.log('balik dong!', this.readyState)
        }, 2000)
      }
    }
  }
}
</script>

