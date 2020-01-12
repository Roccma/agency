/* Ajax-запрос */

function SendPost() // Наша функция, которая будет осуществлять ajax-отправку
{
    jQuery.ajax({ // Начала конструкции для работы с Ajax через jQuery
        type: "GET", // Метод, которым получаем данные из формы
        url: "/action_ajax_form.php", // Обработчик формы.
        data: jQuery("#ajaxform").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
        success: function(html) { // функция выполняемая при успешном отправлении данных
            $('.bg-block-modal').addClass('show-modal');
            $('.modal-popup').addClass('active-modal-form message-send').fadeIn(700);
            $('.success-form').fadeIn(300);
        }
    });
    return false;
}