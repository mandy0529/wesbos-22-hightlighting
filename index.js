const items = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

const handleMouseEnter = (e) => {
  const enteredItem = e.target.getBoundingClientRect();
  const enterdItemWidth = enteredItem.width;
  const enteredItemHeight = enteredItem.height;

  const hereIam = {
    width: enterdItemWidth,
    height: enteredItemHeight,
    top: enteredItem.top + window.scrollY,
    left: enteredItem.left + window.scrollX,
  };
  console.log(hereIam, 'hereIam');
  highlight.style.width = `${hereIam.width}px`;
  highlight.style.height = `${hereIam.height}px`;
  highlight.style.transform = `translate(${hereIam.left}px, ${hereIam.top}px)`;
};

items.forEach((item) => {
  item.addEventListener('mouseenter', handleMouseEnter);
});
