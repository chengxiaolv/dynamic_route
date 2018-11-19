<template>
  <div class="hello">
   
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{

  },
  created(){
    console.log(this.utils.getCookie("userId"));
    // this.https.post("/news/index")
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((res)=>{
    //   console.log(res)
    // })
  }
}
</script>

<style scoped lang="scss">

</style>
