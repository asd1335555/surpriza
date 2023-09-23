let clicks = 0;

const container = document.querySelector('.container');
const hint = document.querySelector('.hint');

function createGiftBox(id) {
    const giftBox = document.createElement('div');
    giftBox.classList.add('gift-box');
    giftBox.id = 'gift-box-' + id;
    
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    giftBox.appendChild(ribbon);

    const giftLid = document.createElement('div');
    giftLid.classList.add('gift-lid');
    giftBox.appendChild(giftLid);

    const giftContent = document.createElement('div');
    giftContent.classList.add('gift-content');
    giftBox.appendChild(giftContent);

    const poem = document.createElement('p');
    poem.id = 'poem-' + id;
    poem.style.display = 'none';
    poem.innerHTML = `SURPRISE<br>`;
    giftContent.appendChild(poem);

    return giftBox;
}

container.addEventListener('click', () => {
    if (clicks < 6) {
        const newGiftBox = createGiftBox(clicks + 1);
        container.insertBefore(newGiftBox, container.firstChild);

        const currentGiftBox = document.getElementById('gift-box-' + clicks);
        const currentPoem = document.getElementById('poem-' + clicks);

        currentPoem.style.display = 'block';
        currentGiftBox.style.transform = 'scale(0)';

        clicks++;

        if (clicks === 6) {
            hint.style.display = 'none';
        }
    }
});
