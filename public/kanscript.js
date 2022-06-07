$('.drag-item').on('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData('listItem', $(this).index())
  })
  
  $('.kanban-column-progress').on('drop', function(event) {
    console.log('in the drop function');
    event.preventDefault();
    let listItemIndex = event.originalEvent.dataTransfer.getData('listItem')
    $(this).append($('.drag-item').eq(listItemIndex))
  })

  .on('dragover', function(event) {
    event.preventDefault()
  })
    .on('dragenter', function(event) {
    $(this).addClass('drop-zone-active')
  })
    .on('dragleave', function(event) {
    $(this).removeClass('drop-zone-active')      
  })

  $('.kanban-column-done').on('drop', function(event) {
    console.log('in the drop function');
    event.preventDefault();
    let listItemIndex = event.originalEvent.dataTransfer.getData('listItem')
    $(this).append($('.drag-item').eq(listItemIndex))
  })
    .on('dragover', function(event) {
    event.preventDefault()
  })
    .on('dragenter', function(event) {
    $(this).addClass('drop-zone-active')
  })
    .on('dragleave', function(event) {
    $(this).removeClass('drop-zone-active')      
  })