const formatString = function (string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + '...';
    }
  };
  
  console.log(formatString(`Curabitur ligula sapien, tincidunt non.`));
  console.log(formatString(`Vestibulum facilisis, purus nec pulvinar iaculis.`));
  console.log(formatString(`Curabitur ligula sapien.`));
  console.log(formatString(`Nunc sed turpis. Curabitur a felis в nunc fringilla tristique.`,
    ),
  );

  ///Нижче практика
  //Я не пам'ятаю чи вчили ви return але я шукав як викоати схожі завдання і не нав як меня написати return (
  //я навіть не знав що ми щось таке вчили) і я знайшов цей метот  можливо ми його вчили але якщо ні то все що я 
  //можу сказати він дуже крутий

  const SlicedString = function (sstring) {
    if ( sstring.length <= 20) {
        return sstring;
    } else {
        return sstring.slice(0, 20) = `...`;
    }
  }