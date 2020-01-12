/* Ajax-запрос */

function SendPostR() // Наша функция, которая будет осуществлять ajax-отправку
{
    jQuery.ajax({	// Начала конструкции для работы с Ajax через jQuery
        type: "GET", // Метод, которым получаем данные из формы
        url: "/action_ajax_form_modal.php", // Обработчик формы.
        data: jQuery("#ajaxformR").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
        success: function(html) {	// функция выполняемая при успешном отправлении данных
            $('.modal-popup').addClass('message-send');
            $('.success-form').fadeIn(300);
        }
    });
    return false;
}