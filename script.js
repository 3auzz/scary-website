document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("game");
    let blocks = [];
    let currentBlock;
    let interval;
    
    function createBlock() {
        const block = document.createElement("div");
        block.className = "block";
        block.style.left = `${Math.floor(Math.random() * 5) * 40}px`;
        block.style.top = "-40px";
        gameContainer.appendChild(block);
        blocks.push(block);
        currentBlock = block;
    }

    function moveBlocks() {
        for (let i = 0; i < blocks.length; i++) {
            let top = parseInt(blocks[i].style.top) + 40;
            blocks[i].style.top = `${top}px`;
            
            if (blocks[i].getBoundingClientRect().bottom >= gameContainer.getBoundingClientRect().bottom) {
                clearInterval(interval);
                alert("Game Over!");
            }
        }
    }

    document.getElementById("start").addEventListener("click", function() {
        if (interval) {
            clearInterval(interval);
            while (gameContainer.firstChild) {
                gameContainer.removeChild(gameContainer.firstChild);
            }
            blocks = [];
            currentBlock = null;
        } else {
            interval = setInterval(function() {
                createBlock();
                moveBlocks();
            }, 1000);
        }
    });
});
