const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulation</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img-logo"
      />
      <h1 className="card-title">Kiran V</h1>
      <p className="card-description">
        Vishnu Insititute of Computer Education and Teacher
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
