import './lib/lib';
import $ from './lib/lib';



$('#first').click(function(){
 $('div').eq(1).fadeToggle(800);
});

$('[data-atribute="first"]').click(function () {
   $('div').eq(0).fadeToggle(800);
});


$('#trigger').click(() => $('#trigger').createModal({
   text: {
      title: 'Modal title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
   },
   btns: {
      count: 3,
      settings: [
         [
            'Close',
            ['btn-danger', 'mr-10'],
            true
         ],
         [
            'Save changes',
            ['btn-success'],
            false,
            () => {
               alert('Данные сохранены');
            }
         ],
         [
            'Another btn',
            ['btn-warning', 'ml-10'],
            false,
            () => {
               alert('Hello World');
            }
         ]
      ]
   }


}));

   $().get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => console.log(res));








