
import json from '../data/hobbies.json' assert {type: 'json'};

const { createApp } = Vue
createApp({     
        data() {
        return {
            header: "Hobbies",
            detail:"A little bit about the hobbies I enjoy",
            hobby: json,
            };
        },    
  }).mount('#app')
