
document.querySelector('.git-main-left-edit-btn').addEventListener('click', () => {
    document.querySelector('.git-main-left-namenick').style.display = "none";
    document.querySelector('.git-main-left-description').style.display = "none";
    document.querySelector('.git-main-left-editing').style.display = "flex";
    document.querySelector('.git-main-left-editing-name').value = document.querySelector('.git-main-left-name').innerHTML;
    document.querySelector('.git-main-left-editing-bio').value = document.querySelector('.git-main-left-description-txt').innerHTML;
});

document.querySelector('.git-main-left-editing-save-btn').addEventListener('click', () => {
    document.querySelector('.git-main-left-namenick').style.display = "block";
    document.querySelector('.git-main-left-description').style.display = "flex";
    document.querySelector('.git-main-left-editing').style.display = "none";
    document.querySelector('.git-main-left-name').innerHTML = document.querySelector('.git-main-left-editing-name').value;
    document.querySelector('.git-main-left-description-txt').innerHTML = document.querySelector('.git-main-left-editing-bio').value;
    document.querySelector('.git-main-left-addiction-1').innerHTML = document.querySelector('.git-main-left-editing-block-input-1').value;
    document.querySelector('.git-main-left-addiction-2').innerHTML = document.querySelector('.git-main-left-editing-block-input-2').value;
    document.querySelector('.git-main-left-addiction-4').innerHTML = document.querySelector('.git-main-left-editing-block-input-4').value;
    document.querySelector('.git-main-left-addiction-5').innerHTML = document.querySelector('.git-main-left-editing-block-input-5').value;
    if(document.querySelector('.git-main-left-editing-block-input-1').value != ""){document.querySelector('.git-main-left-addictions-1').style.display = "flex";}
    else{document.querySelector('.git-main-left-addictions-1').style.display = "none";}
    if(document.querySelector('.git-main-left-editing-block-input-2').value != ""){document.querySelector('.git-main-left-addictions-2').style.display = "flex";}
    else{document.querySelector('.git-main-left-addictions-2').style.display = "none";}
    if(document.querySelector('.git-main-left-editing-block-input-3').checked == true)
    {
        document.querySelector('.git-main-left-addictions-3').style.display = "flex";
        setInterval(() => {
            var time = new Date();
            document.querySelector('.git-main-left-addiction-3').innerHTML = time.toLocaleTimeString();
        }, 1000);
    }
    else{document.querySelector('.git-main-left-addictions-3').style.display = "none";}
    if(document.querySelector('.git-main-left-editing-block-input-4').value != ""){document.querySelector('.git-main-left-addictions-4').style.display = "flex";}
    else{document.querySelector('.git-main-left-addictions-4').style.display = "none";}
    if(document.querySelector('.git-main-left-editing-block-input-5').value != ""){document.querySelector('.git-main-left-addictions-5').style.display = "flex";}
    else{document.querySelector('.git-main-left-addictions-5').style.display = "none";}
});

document.querySelector('.git-main-left-editing-cancel-btn').addEventListener('click', () => {
    document.querySelector('.git-main-left-namenick').style.display = "block";
    document.querySelector('.git-main-left-description').style.display = "flex";
    document.querySelector('.git-main-left-editing').style.display = "none";
});