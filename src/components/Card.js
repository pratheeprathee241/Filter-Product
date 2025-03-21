const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <>
    <div className="card">
      <section className="card-body">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h5 className="card-title">{title}</h5>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price pb-3">
            <del> {prevPrice}</del> <span>${newPrice}</span> 
            </div>
          </section>
          <div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Card;