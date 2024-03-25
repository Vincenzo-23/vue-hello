const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Buongiorno Vue!',
        srcImage: "https://i.pinimg.com/736x/c5/5f/50/c55f50cb7be3c17582cc0e28f961fe56.jpg",
        width300: "width-300"
      }
    }
  }).mount('#app')

  