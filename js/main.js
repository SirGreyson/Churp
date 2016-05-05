/**
 * Created by Greyson on 5/5/16.
 */

/**
 * Custom parallax scrolling animation
 * @param id - the id of the element to scroll to
 */
function scrollToDiv(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}