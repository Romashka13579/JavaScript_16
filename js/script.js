var gitMainLeftLogoStatus = document.querySelector('.git-main-left-logo-status');
var gitMainLeftLogoStatusTxt = document.querySelector('.git-main-left-logo-status-txt');
var gitMainLeftLogoStatusInChange = document.querySelector('.git-main-left-logo-status-in-change');
var inChangeHeaderClose = document.querySelector('.in-change-header-close');
var inChangeFooterBtnSet = document.querySelector('.in-change-footer-btn-set');
var inChangeFooterBtnClear = document.querySelector('.in-change-footer-btn-clear');

gitMainLeftLogoStatusTxt.style.marginLeft = ""+(-Math.round(gitMainLeftLogoStatusTxt.clientWidth))+"px";
gitMainLeftLogoStatusTxt.style.display = "none";
gitMainLeftLogoStatus.addEventListener('mouseenter', () => {
    gitMainLeftLogoStatusTxt.style.display = "block";
    setTimeout(() => {
        gitMainLeftLogoStatusTxt.style.marginLeft = "0px";
    }, 10);
});
gitMainLeftLogoStatus.addEventListener('mouseleave', () => {
    gitMainLeftLogoStatusTxt.style.marginLeft = ""+(-Math.round(gitMainLeftLogoStatusTxt.clientWidth))+"px";
});

gitMainLeftLogoStatus.addEventListener('click', () => {
    gitMainLeftLogoStatusInChange.style.display = "flex";
    if(gitMainLeftLogoStatusTxt.innerHTML != "Set status"){
        gitMainLeftLogoStatusInChange.querySelector('.in-change-block-changing-txt').value = gitMainLeftLogoStatusTxt.innerHTML;
    }
    else{
        gitMainLeftLogoStatusInChange.querySelector('.in-change-block-changing-txt').value ="";
    }
});

inChangeHeaderClose.addEventListener('click', () => {
    gitMainLeftLogoStatusInChange.style.display = "none";
    document.querySelector('.in-change-block-busy-checkbox').checked = false;
    gitMainLeftLogoStatus.style.backgroundColor = "white";
    document.querySelector('.git-main-left-logo-status-icon').style.backgroundColor = "white";
    gitMainLeftLogoStatus.style.borderColor = "rgb(202, 202, 202)";
});

inChangeFooterBtnSet.addEventListener('click', () => {
    gitMainLeftLogoStatusInChange.style.display = "none";
    gitMainLeftLogoStatusTxt.innerHTML = gitMainLeftLogoStatusInChange.querySelector('.in-change-block-changing-txt').value;
    gitMainLeftLogoStatusTxt.style.display = "block";
    gitMainLeftLogoStatusTxt.style.marginLeft = ""+(-Math.round(gitMainLeftLogoStatusTxt.clientWidth))+"px";
    gitMainLeftLogoStatusTxt.style.display = "none";
});

inChangeFooterBtnClear.addEventListener('click', () => {
    gitMainLeftLogoStatusInChange.style.display = "none";
    gitMainLeftLogoStatusTxt.innerHTML = "Set status";
    gitMainLeftLogoStatusTxt.style.display = "block";
    gitMainLeftLogoStatusTxt.style.marginLeft = ""+(-Math.round(gitMainLeftLogoStatusTxt.clientWidth))+"px";
    gitMainLeftLogoStatusTxt.style.display = "none";
    document.querySelector('.in-change-block-busy-checkbox').checked = false;
    gitMainLeftLogoStatus.style.backgroundColor = "white";
    document.querySelector('.git-main-left-logo-status-icon').style.backgroundColor = "white";
    gitMainLeftLogoStatus.style.borderColor = "rgb(202, 202, 202)";
});

document.querySelector('.in-change-block-changing-txt').addEventListener('input', () => {
    if(document.querySelector('.in-change-block-changing-txt').value == ""){
        document.querySelector('.in-change-block-suggestions').style.display = "block";
    }
    else{
        document.querySelector('.in-change-block-suggestions').style.display = "none";
    }
});

var inChangeBlockSuggestionsBlocks = document.querySelectorAll('.in-change-block-suggestions-block');

inChangeBlockSuggestionsBlocks.forEach(inChangeBlockSuggestionsBlock => {
    inChangeBlockSuggestionsBlock.addEventListener('click', () => {
        document.querySelector('.in-change-block-changing-icon-1').style.background = inChangeBlockSuggestionsBlock.querySelector('.in-change-block-suggestions-block-icon').style.background;
        document.querySelector('.in-change-block-changing-txt').value = inChangeBlockSuggestionsBlock.querySelector('.in-change-block-suggestions-block-txt').innerHTML;
        document.querySelector('.in-change-block-suggestions').style.display = "none";
    })
});

var inChangeBlock2Dropdown = document.querySelector('.in-change-block-2-dropdown');
var items = document.querySelectorAll('.items');
var inChangeBlock2DropdownAbsolute = document.querySelector('.in-change-block-2-dropdown-absolute');
var ifblock = false;

items.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.item-txt').innerHTML = item.innerHTML;
        inChangeBlock2DropdownAbsolute.style.display = "none";
    });
});

inChangeBlock2Dropdown.addEventListener('focus', () => {
    inChangeBlock2DropdownAbsolute.style.display = "flex";
});

inChangeBlock2Dropdown.addEventListener('focusout', () => {
    inChangeBlock2DropdownAbsolute.style.display = "none";
});

document.querySelector('.in-change-block-busy-checkbox').addEventListener('change', () => {
    if (document.querySelector('.in-change-block-busy-checkbox').checked) {
        gitMainLeftLogoStatus.style.backgroundColor = "rgb(255, 255, 184)";
        document.querySelector('.git-main-left-logo-status-icon').style.backgroundColor = "rgb(255, 255, 184)";
        gitMainLeftLogoStatus.style.borderColor = "lightcoral";
    }
    else {
        gitMainLeftLogoStatus.style.backgroundColor = "white";
        document.querySelector('.git-main-left-logo-status-icon').style.backgroundColor = "white";
        gitMainLeftLogoStatus.style.borderColor = "rgb(202, 202, 202)";
    }
});

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