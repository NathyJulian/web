document.querySelectorAll('.person-marker').forEach(marker => {
    const feedbackBox = marker.querySelector('.feedback-box');

    marker.addEventListener('mouseenter', () => {
        feedbackBox.classList.remove('hidden');
    });

    marker.addEventListener('mouseleave', () => {
        feedbackBox.classList.add('hidden');
    });
});
