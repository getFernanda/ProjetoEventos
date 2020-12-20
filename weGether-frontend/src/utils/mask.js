import $ from 'jquery';
import 'jquery-mask-plugin';

$(".phone").mask("(99) 99999-9999");
$('.email').mask("A", {
    translation: {
        "A": { pattern: /[\w@\-.+]/, recursive: true }
    }
});