import React from 'react'

export default function pagenavigation() {
  return (
    <div>
   <nav aria-label="Page navigation example" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
        Previous
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>


    </div>
  )
}


