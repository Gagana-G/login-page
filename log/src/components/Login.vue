<template>
    
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Username"><br><br>
        <input type="password" v-model="password" placeholder="Enter Password"><br><br>
        <button v-on:click="login">Login</button>
         <p>
             <router-link to="/sign">Sign up </router-link>
         </p>

   </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data()
    {
        return{
            username:'',
            password:''
        }
    },methods:{
       async login(){
            let result=await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)

            if(result.status==200 && result.data.length>0)
            {
                
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            console.warn(result)
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }

}
</script>

<style scoped>
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
}
.register button{
    width: 320px;
    height: 40px;
    border: 2px solid #333;
    background: rgb(250, 102, 102);
    color: #333;
    font-size: 20px;
    cursor: pointer;
}

</style>