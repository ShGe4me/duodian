<template>
    <div class="login_wrap">
        <div id="register" class="uc" v-show="!Showflag">
            <div class="form">
                <div class="form-item">
                    <p class="form-field">手机号码</p>
                    <div class="form-value">
                        <input
                            type="tel"
                            maxlength="11"
                            autocomplete="off"
                            class="num-font"
                            v-model="inputText"
                        >
                    </div>
                </div>
                <button type="submit" :class="{yzmbtn:true,yzmbtnsure:flag}" @click="goLogin">获取验证码</button>
            </div>
        </div>
        <div class="yzm" v-show="Showflag">
            <h1 class="h1">请输入验证码</h1>
            <p class="yzmp">验证码:{{yzm}}</p>
            <ul class="list">
                <input
                    type="text"
                    maxlength="6"
                    autocomplete="off"
                    class="liinput"
                    v-model="litext"
                >
                <li :class="{active:litext.split('').length >= index+1}" v-for="(item,index) in 6" :key="index">{{litext.split('')[index]}}</li>
            </ul>
            <button type="submit" :class="{yzmbtn:true,yzmbtnsure:liflag}" @click="register">注册</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex'
export default {
  watch: {
    inputText(newText) {
      this.flag = newText.length === 11;
    },
    litext(newlitext) {
      this.litext = newlitext;
      this.liflag = newlitext.length === 6;
    }
  },
  data() {
    return {
		inputText: "",
		flag: false,
		liflag: false,
		Showflag: false,
		yzm: "",
		litext: ""
    };
  },
  mounted() {
    this.RndNum(6);
  },
  methods: {
    goLogin() {
		if (!this.flag) {
			alert("请输入正确的手机号");
		} else {
			this.Showflag = true;
		}
    },
    register() {
      if (this.yzm * 1 === this.litext * 1) {
        axios.get('/api/login',{
            params:{
              	'iphone':this.inputText
            }
          }).then(res=>{
            if(res.data){
				this.$store.dispatch('SetUser',res.data['0'])
				this.$router.push(this.$path);
            }else{
              	alert('登录失败')
            }  
        })
      } else {
        	alert("验证码输入不正确");
      }
    },
    RndNum(n) {
      var rnd = "";
      	for (var i = 0; i < n; i++) rnd += Math.floor(Math.random() * 10);
      		this.yzm = rnd;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/demo.scss";
.login_wrap {
	width: 100%;
	height: 100%;
	background: #3a96ee;
	padding: 60px 30px 0;
}

.form {
	width: 100%;
	height: 300px;
}
.form-value {
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #eee;
    input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: #3a96ee;
	}
}
.form-field {
  	color: #fff;
}
.yzmbtn {
	width: 100%;
	color: #2793fa !important;
	background-color: #fff;
	border: none;
	outline: none;
	opacity: 0.7;
	height: 50px;
	margin-top: 30px;
	border-radius: 30px;
}
.yzmbtnsure {
  	opacity: 1;
}
.h1 {
	font-size: 25px;
	color: #fff;
	font-weight: 600;
}
.yzmp {
  	color: #fff;
}
.list {
	height: 50px;
	width: 100%;
	margin-top: 20px;
	display: flex;
	position: relative;
	align-items: center;

	li {
		width: 14%;
		height: 80%;
		border: 1px solid #ccc;
		margin: 0 1.81%;
		text-align: center;
		line-height: 40px;
		color: #fff;
		&.active {
		border: 1px solid red;
		}
	}
	.liinput {
		position: absolute;
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		background: rgba(255, 255, 255, 0);
		color: #3a96ee;
		padding-bottom: 80px;
	}
}
</style>