<template>
  <h1> DAB </h1>
</template>

<script>
export default {
  sockets: {
        getData: function (data)
        {
            console.log(data.shit)
        },
        updateRecieved: function (data)
        {
            console.log(data.val)
        }
    },
  methods:
  {
    requestUpdate: function()
    {
      this.$socket.emit('requestUpdate', 'google.com')
    }

  },
  mounted()
  {
    setTimeout(()=>
    {
      this.$socket.emit('requestUpdate',{val: 'google.com'})
    },2000)
  }
};
</script>
