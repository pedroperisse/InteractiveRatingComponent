import "./App.css";

function Final({ selectedRating }) {
  return (
    <>
      <div>
        <section className="final-container  ">
          <img
            src="../public/images/illustration-thank-you.svg"
            alt="Thank You"
            className="img-thanks"
          />
          <p className="txt-rate">{`You selected ${selectedRating} out of 5`}</p>
          <h2 className="thank">Thank You!</h2>
          <p className="txt-final">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </section>
      </div>
    </>
  );
}
export default Final;
