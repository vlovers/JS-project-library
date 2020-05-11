import $ from '../core';

$.prototype.getAttribute = function (attributeName) {
   if (!attributeName) {
      return this;
   }

   for (let i = 0; i < this.length; i++) {
      const id = this[i].getAttribute(attributeName);
   }  
   return this;
};

$.prototype.setAttribute = function (attributeName, attributeValue) {
   if (!attributeName || !attributeValue) {
      return this;
   }

   for (let i = 0; i < this.length; i++) {
      this[i].setAttribute(attributeName, attributeValue);
   }
   return this;
};


export default $;