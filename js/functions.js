function enableDisabled(elem, bool) {
    $(elem).attr("disabled", bool);
}

function clearInputs() {
    $('#TaskName').val("");
    $('#TaskDesc').val("");
}

function msg(flag, elem, color, msg) {
    alert(msg);
    $(elem).css("borderColor", color);
    if (flag == 1) {
        $(elem).select();
    } else {
        $(elem).blur();
    }
}

function selectCriteria(elem) {
    $(elem).siblings().removeClass('selected');
    $(elem).addClass('selected');
}

export { enableDisabled }
export { clearInputs }
export { msg }
export { selectCriteria }
