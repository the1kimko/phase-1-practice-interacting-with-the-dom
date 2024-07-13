// js/challenge.js

document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let intervalId;
    let isPlaying = true;
  
    //Starts counter and increments value of count by 1
    const startCounter = () => {
      intervalId = setInterval(() => {
        count++;
        counter.innerText = count;
      }, 1000);
    };
  
    //Stops counter from incrementing
    const stopCounter = () => {
      clearInterval(intervalId);
    };
  
    //Enables or disables all buttons except the pause button
    const toggleButtons = (state) => {
      document.querySelectorAll('button').forEach(button => {
        if (button.id !== 'pause') {
          button.disabled = state;
        }
      });
    };
  
    //Decrements counter value by 1
    document.getElementById('minus').addEventListener('click', () => {
      count--;
      counter.innerText = count;
    });
  
    //Increments counter value by 1
    document.getElementById('plus').addEventListener('click', () => {
      count++;
      counter.innerText = count;
    });
  
    //Updates the like counter
    document.getElementById('heart').addEventListener('click', () => {
      let likesList = document.querySelector('.likes');
      let existingLike = document.querySelector(`[data-num="${count}"]`);
  
      if (existingLike) {
        let likeCount = parseInt(existingLike.children[0].innerText);
        existingLike.innerHTML = `${count} has been liked <span>${likeCount + 1}</span> times`;
      } else {
        let newLike = document.createElement('li');
        newLike.setAttribute('data-num', count);
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    //Toggles between pausing and resuming the counter
    document.getElementById('pause').addEventListener('click', function() {
      if (isPlaying) {
        stopCounter();
        this.innerText = 'resume';
      } else {
        startCounter();
        this.innerText = 'pause';
      }
      isPlaying = !isPlaying;
      toggleButtons(!isPlaying);
    });
  
    //Handles submission of comments and displaying it
    document.getElementById('comment-form').addEventListener('submit', (event) => {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let comment = commentInput.value;
      commentInput.value = '';
  
      let commentList = document.querySelector('.comments');
      let newComment = document.createElement('p');
      newComment.innerText = comment;
      commentList.appendChild(newComment);
    });
  
    // Start the counter when the page loads
    startCounter();
  });
  