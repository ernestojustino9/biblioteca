import React from 'react'

const ModalEditarLivro = () => {
  return (
    <div>      <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12 col-xl-12">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Titulo</label>
              <input type="text" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Autor</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Data</label>
              <input type="date" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Qtd</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
          </form>
        </div>

      </div>
    </div></div>
  )
}

export default ModalEditarLivro