import $ from '../core';

$.prototype.dropdown = function () {
   for (let i = 0; i < this.length; i++) {
      const id = this[i].getAttribute('id');
      $(this[i]).on('click', () => {
         $(`[data-toggle-id="${id}"]`).fadeToggle(400);
         $(this[i]).toggleClass('btn-dropdown');
      });
   }
};
$('.dropdown-toggle').dropdown();
