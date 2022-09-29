export let GeneratedText = ({ index, text }) => {
  return (
    <article>
      {index <= 0 || isNaN(index) ? (
        <p className="text-generated">{text[0]}</p>
      ) : (
        false
      )}
      {text.slice(0, index).map((item, itemIndex) => {
        if (index > 0) {
          return (
            <p className="text-generated" key={itemIndex}>
              {item}
            </p>
          );
        }
      })}
    </article>
  );
};
