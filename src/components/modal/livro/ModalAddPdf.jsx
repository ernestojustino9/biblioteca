import React from 'react'

const ModalAddPdf = () => {
  return (
    <div>      <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12 col-xl-12">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Pdf</label>
              <input type="image" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" value="Sistema Online de Biblioteca" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" value="EJ-Developer" />
            </div>
            {/* <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Pdf</label>
              <input type="text" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" />
            </div> */}

            <button type="submit" className="btn btn-primary">Salvar</button>
          </form>
        </div>

      </div>
    </div></div>
  )
}

export default ModalAddPdf