<template>
<div class="screen">
    <h1>Welcome to DIATOZ Snapshot Application</h1>
    <input type="text" placeholder="search"><br><br>
    
    <button>Mountains</button> &nbsp;
    <button>Beaches</button> &nbsp;
    <button>Birds</button> &nbsp;
    <button>Food</button> &nbsp;
    
    </div>
    
</template>

<script>
export default {
    name:'Home',
     mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'Sign'})
        }
    }
}
</script>

<style scoped>
.screen h1{
    font-style:italic ;
    font-family: cursive;
    text-align: center;
    align-items: center;
    color: rgb(5, 45, 90);
}
.screen input{
    width: 300px;
    height: 30px;
    text-align: center;
}

</style>