var flag_mail;
$('.input-row-inner input[type="email"]').blur(function() {
    if ($(this).val() != '') {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($(this).val())) {
            flag_mail = true;
            $(this).removeClass('errovalid');
            $(this).parent().find('error-label').remove();
        } else {
            flag_mail = false;
            $(this).addClass('errovalid');
            $(this).parent().find('.error-label').remove();
            $(this).parent().append('<span class="error-label">Wrong format</span>');
        }
    } else {
        flag_mail = false;
        $(this).addClass('errovalid');
        $(this).parent().find('.error-label').remove();
        $(this).parent().append('<span class="error-label">Can not be empty</span>');
    }
});
$('#send-form').on('click', function(e) {
    var input_mail = $(this).parents('form').find('input[type="email"]');
    if ($(input_mail).val() != '') {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($(input_mail).val())) {
            flag_mail = true;
            $(input_mail).removeClass('errovalid');
            $(input_mail).parent().find('error-label').remove();
        } else {
            flag_mail = false;
            $(input_mail).addClass('errovalid');
            $(input_mail).parent().find('.error-label').remove();
            $(input_mail).parent().append('<span class="error-label">Wrong format</span>');
        }
    } else {
        flag_mail = false;
        $(input_mail).addClass('errovalid');
        $(input_mail).parent().find('.error-label').remove();
        $(input_mail).parent().append('<span class="error-label">Can not be empty</span>');
    }
    if (flag_mail != false) {
        SendPost();
    }
    e.preventDefault();
    return false;
});
$('#send-formr').on('click', function(e) {
    var input_mail = $(this).parents('form').find('input[type="email"]');
    if ($(input_mail).val() != '') {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($(input_mail).val())) {
            flag_mail = true;
            $(input_mail).removeClass('errovalid');
            $(input_mail).parent().find('error-label').remove();
        } else {
            flag_mail = false;
            $(input_mail).addClass('errovalid');
            $(input_mail).parent().find('.error-label').remove();
            $(input_mail).parent().append('<span class="error-label">Wrong format</span>');
        }
    } else {
        flag_mail = false;
        $(input_mail).addClass('errovalid');
        $(input_mail).parent().find('.error-label').remove();
        $(input_mail).parent().append('<span class="error-label">Can not be empty</span>');
    }
    if (flag_mail != false) {
        SendPostR();
    }
    e.preventDefault();
    return false;
});