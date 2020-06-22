<template>
    <div class="home">
        <Chat/>
        <b-button @click="sendEvent">alsdkf</b-button>
    </div>
</template>

<script>

import Chat from "../components/Chat";

export default {
    name: 'Home',
    components: {
        Chat
    },
    methods: {
        sendEvent() {
            this.$socket.emit('send', {channel: 'system', event: 'kim', data: '123'});
        }
    },
    created() {
        this.$socket.emit('join_channel', 'system');
    },
  sockets:{
      connect:function(){
        alert(123);
      }
  }

}
</script>
