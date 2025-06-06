const btn = document.getElementById('clickBtn');
const msg = document.getElementById('message');
const messageText = document.getElementById('message-text');
const loading = document.getElementById('loading');
const emojiContainer = document.getElementById('emoji-container');
const bgImagesContainer = document.getElementById('bg-images');
const bgImagesAltContainer = document.getElementById('bg-images-alt');
const bgImageDutsContainer = document.getElementById('bg-image-duts');

const heartBtn = document.getElementById('heartBtn');
const unlikeBtn = document.getElementById('unlikeBtn');

// Hide all image batches initially
bgImagesContainer.classList.add('hidden');
bgImagesAltContainer.classList.add('hidden');
bgImageDutsContainer.classList.add('hidden');
msg.classList.add('hidden');
emojiContainer.classList.remove('show');

// First button click
btn.addEventListener('click', () => {
  btn.style.display = 'none';
  loading.classList.remove('hidden');

  // Hide everything during loading
  bgImagesContainer.classList.add('hidden');
  bgImagesAltContainer.classList.add('hidden');
  bgImageDutsContainer.classList.add('hidden');
  msg.classList.remove('show');
  emojiContainer.classList.remove('show');

  setTimeout(() => {
    loading.classList.add('hidden');

    messageText.textContent = 'I miss you boss hehe';
    msg.classList.remove('hidden');
    msg.classList.add('show');
    emojiContainer.classList.add('show');

    bgImagesContainer.classList.remove('hidden');
    bgImagesAltContainer.classList.add('hidden');
    bgImageDutsContainer.classList.add('hidden');

    // Rotate original images randomly
    const bgImages = bgImagesContainer.querySelectorAll('.bg-img');
    bgImages.forEach(img => {
      const rotation = (Math.random() * 20 - 10).toFixed(1);
      img.style.transform = `rotate(${rotation}deg)`;
    });
  }, 1500);
});

// Heart emoji button click
heartBtn.addEventListener('click', () => {
  loading.classList.remove('hidden');
  msg.classList.remove('show');
  emojiContainer.classList.remove('show');
  bgImagesContainer.classList.add('hidden');
  bgImagesAltContainer.classList.add('hidden');
  bgImageDutsContainer.classList.add('hidden');

  setTimeout(() => {
    loading.classList.add('hidden');

    messageText.textContent = 'hart hart ka sakin boss';
    msg.classList.add('show');
    emojiContainer.classList.add('show');

    bgImagesAltContainer.classList.remove('hidden');
    bgImagesContainer.classList.add('hidden');
    bgImageDutsContainer.classList.add('hidden');

    const altImages = bgImagesAltContainer.querySelectorAll('.bg-img');
    altImages.forEach(img => {
      const rotation = (Math.random() * 20 - 10).toFixed(1);
      img.style.transform = `rotate(${rotation}deg)`;
    });
  }, 1500);
});

// Unlike emoji button click
unlikeBtn.addEventListener('click', () => {
  loading.classList.remove('hidden');
  msg.classList.remove('show');
  emojiContainer.classList.remove('show');
  bgImagesContainer.classList.add('hidden');
  bgImagesAltContainer.classList.add('hidden');
  bgImageDutsContainer.classList.add('hidden');

  setTimeout(() => {
    loading.classList.add('hidden');

    messageText.textContent = '';
    msg.classList.add('show');
    emojiContainer.classList.remove('show');

    bgImageDutsContainer.classList.remove('hidden');
    bgImagesContainer.classList.add('hidden');
    bgImagesAltContainer.classList.add('hidden');
  }, 1500);
});
