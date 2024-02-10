var el = document.getElementById('sorted');
var sortable = Sortable.create(el);

Sortable.create(sortFalse, {
  group: "sorting",
  sort: false
  // filter: '.filterfalse',
});

// Sortable.create(sorted, {
//   // handle: '.glyphicon-move',
// 	dragabble: ".add_photo_l",
// 	filter: ".view_text",
//   // animation: 150
// });


// handle + event
// var container = document.getElementById("sorted");
// new Sortable(container, {
//  // handle: ".tile__title", // css-селектор, за который можно таскать
//  dragabble: ".add_photo_l1", // css-селектор элементов, которые можно сортировать
 
// });