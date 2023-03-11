export const handleClickScroll = (item) => {
    const element = document.getElementById(item);
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    if (element) {
      
      window.scrollTo({ behavior: 'smooth', top: offsetPosition });
    }
  };