function DeleteItems() {
  return (
    <>
      <div className="row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-6">Go to college</div>
        <div className="col-4">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteItems;
