var gitEditBtn = document.querySelector('.git-main-left-edit-btn');

gitEditBtn.addEventListener('click', () => {
    document.querySelector('.git-main-left-namenick').style.display = "none";
    document.querySelector('.git-main-left-description').style.display = "none";
})