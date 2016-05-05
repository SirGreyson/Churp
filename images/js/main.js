/**
 * Created by Greyson on 5/5/16.
 */

function scrollToDiv(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}