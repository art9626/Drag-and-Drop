(() => {
  const item = document.querySelector('.item');
  const placeholders = document.querySelectorAll('.placeholder');

  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend', dragend);

  placeholders.forEach(el => {
    el.addEventListener('dragenter', dragenter);
    el.addEventListener('dragover', dragover);
    el.addEventListener('dragleave', dragleave);
    el.addEventListener('drop', dragdrop);
  });

  function dragstart(e) {
    e.target.classList.add('hold');
    placeholders.forEach(el => {
      el.classList.add('ready');
    });
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0)
  }

  function dragend(e) {
    e.target.classList.remove('hold', 'hide');

    placeholders.forEach(el => {
      el.classList.remove('ready');
    });
  }

  function dragenter(e) {
    e.target.classList.add('hovered');
  }

  function dragover(e) {
    e.preventDefault();
  }

  function dragleave(e) {
    e.target.classList.remove('hovered');
  }

  function dragdrop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
  }
})()