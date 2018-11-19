<template>
<div class="login-wrapper">
	<h1>
		<img src="../assets/logo.png">
		<span>vue后台管理之动态加载路由的方法</span>
	</h1>
	<div class="login-item">
		<div class="item-title">
			<span>登陆</span>
		</div>
		<div class="item-log">
			<div class="log">
				<el-input placeholder="请输入账户名" v-model="loginName"></el-input>
			</div>
			<div class="log">
				<el-input placeholder="请输入密码" type="password" v-model="psd"></el-input>
			</div>
			<el-button @click="login">登 &nbsp;&nbsp;录</el-button>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			psd: '',
			loginName: '',
		}
	},
	created() {

	},
	methods: {
    login(){
      if(this.psd == 123 && this.loginName == 123){
        this.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success',
          duration: 1000
        });
        this.utils.setCookie("userId","2");
        setTimeout(()=>{
          this.$router.push("/homePage");
        },1000)
      }else{
        if(!this.loginName.trim()){
          this.$message({
            showClose: true,
            message: '请填写账户名',
            type: 'error',
            duration: 1000
          });
          return;
        }
        if(!this.psd.trim()){
          this.$message({
            showClose: true,
            message: '请填写密码',
            type: 'error',
            duration: 1000
          });
          return;
        }
        if(this.loginName.trim() !== '123'){
          this.$message({
            showClose: true,
            message: '账户名错误',
            type: 'error',
            duration: 1000
          });
					return
        }
        if(this.psd.trim() !== '123'){
          this.$message({
            showClose: true,
            message: '密码错误',
            type: 'error',
            duration: 1000
          });
        }
      }
    }
	}
}
</script>
<style lang="scss" scoped>
	.login-wrapper {
		width: 100%;
		height: 100%;
		background: url('../assets/bg.png');
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		h1 {
			position: absolute;
			left: 5%;
			top: 30px;
			display: flex;
			height: 48px;
			img {
				width: 48px;
				height: 48px;
				border-radius: 50%;
			}
			span {
				font-size: 16px;
				color: #fff;
				margin-left: 20px;
				line-height: 48px;
				display: inline-block;
			}
		}
		.login-item {
			width: 570px;
			height: 350px;
			background: #fff;
			.item-title {
				width: 100%;
				height: 52px;
				line-height: 52px;
				text-align: center;
				font-size: 16px;
				display: flex;
				span {
					display: inline-block;
					width: 100%;
					background: #53B5E3;
					color: #fff; // cursor: pointer;
					// &:hover {
					// 	background-color: #53B5E3;
					// 	color: #fff;
					// }
				}
			}
			.active {
				background: #47A4D0 !important;
				color: #fff !important;
			}
			.item-log {
				// display: flex;
				width: 100%;
				padding-top: 20px;
				.log {
					width: 350px;
					margin: 0 auto;
					height: 46px;
					margin-top: 30px;
					display: flex;
					border: 1px solid #DEDEDE;
					&:hover {
						border: 1px solid #7DC3E4;
					}
					span {
						display: inline-block;
						width: 40px; // background: red;
						height: 36px;
						margin-top: 5px;
						position: relative; // display: flex;
						border-right: 1px solid #DEDEDE;
						img {
							position: absolute;
							left: 30%;
							top: 30%;
						}
					}
					.el-input {
						height: 46px !important;
						.el-input__inner {
							height: 46px !important;
							line-height: 46px !important;
							border: none;
						}
					} // align-items: center;
				}
				.errmsg {
					width: 350px;
					;
					font-family: PingFangSC-Regular;
					height: 20px;
					line-height: 20px;
					font-size: 12px;
					color: #DE5959;
					margin: 0 auto;
					padding-top: 10px;
					img {
						dispaly: inline-block;
						margin-right: 6px;
					}
				}
			}
		}
		.el-button {
			width: 350px;
			margin: 0 auto;
			display: block;
			margin-top: 30px;
			background: #7DC3E4;
			color: #fff;
			font-size: 18px;
			&:hover {
				background: #63B7DF
			}
		}
  }
  
  .el-input{
    border: none !important;
  }
</style>