<template>
  <div class="game container">
    <!-- Soundtrack goes here! -->
    <audio autoplay loop>
      <source src="../assets/POL-time-attack-short.wav" type="audio/wav">
      Your browser doesn't support audio!
    </audio>
    <div class="row">

      <!-- Player One -->
      <div class="col-md-6 border-right border-dark">

        <!-- <button @click="addPersonToFirebase">
          Add some random person to db
        </button>

        <div>
          <ul>
            <li 
              v-for="player in players"
              :key="player['.key']">
              {{ player.name }}
            </li>
          </ul>
        </div> -->

        <h1>
          Player One Health: {{ lives.p1 }}
        </h1>

        <h1 v-if="readyState">
          You picked {{ p1 }}
        </h1>

        <div v-if="winner == 'Two' && pow" style="left: 120px; position: absolute; z-index: 1">
          <audio autoplay>
            <source src="../assets/audio/PUNCH.wav" type="audio/wav">
          </audio>
          <img src="../assets/pow.png" alt="pow" width="300px" height="300px">
        </div>

        <div>
          <img src="../assets/picts/ryu-ready.gif" width="300" height="300" style="transform: scaleX(-1)"/>
        </div>
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

      <!-- Player Two -->
      <div class="col-md-6">
      
      <h1>
        Player Two Health: {{ lives.p2 }}
      </h1>

      <h1 v-if="readyState">
        You picked {{ p2 }}
      </h1>  

      <div v-if="winner == 'One' && pow" style="left: 120px; position: absolute; z-index: 1">
        <audio autoplay>
          <source src="../assets/audio/PUNCH.wav" type="audio/wav">
        </audio>
        <img src="../assets/pow.png" alt="pow" width="300px" height="300px">
      </div>

      <div>
        <img src="../assets/picts/ken 2-ready.gif" width="300" height="300"/>
      </div>
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
import { roomTest } from '../firebase';

export default {
  name: 'game',
  data() {
    return {
      p1: null,
      p2: null,
      readyState: false,
      winner: null,
      lives: {
        p1: 3,
        p2: 3
      },
      p1id: null,
      p2id: null,
      pow: false
    }
  },

  firebase: {
    players: roomTest
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
    },

    submitScore() {
      // kirim ke firebase itu setiap user milih pemain mereka sendiri. Setelah dua-dua user memilih, dihitung pemenangnya siapa.

      /*
        1. User yang masuk diassign player dulu (1, 2)
        2. Setelah dua-duanya assigned, mulai
        3. setiap pilihan user, ditembak ke database
      */
    },

    addPersonToFirebase() {
      roomTest.push({ 
        name: "P1",
        active: false,
        score: 0,
        health: 3,
        choice: null
      })

      // roomTest.push({ score: 0 })

      roomTest.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

      roomTe
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

        this.pow = true
        
        // nandain pemenang
        if (p1 === p2) {
          this.winner = "tie"
          this.pow = false
        } else {
          if (p1 === 'scissor' && p2 === 'rock') this.winner = 'Two'
          if (p1 === 'scissor' && p2 === 'paper') this.winner = 'One'
          if (p1 === 'paper' && p2 === 'rock') this.winner = 'One'
          if (p1 === 'paper' && p2 === 'scissor') this.winner = 'Two'
          if (p1 === 'rock' && p2 === 'scissor') this.winner = 'One'
          if (p1 === 'rock' && p2 === 'paper') this.winner = 'Two'
        }

        // pow!!!
        setTimeout(() => {
          this.pow = false
        }, 500)

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

