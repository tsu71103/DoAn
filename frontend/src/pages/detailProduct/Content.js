import React, { useEffect, useState } from "react";
import { GET_ALL, GET_ID } from "../api/apiService";
import { useLocation, Link } from "react-router-dom";
const cardTextStyle = {
  maxWidth: "80%",
};

const Content = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  useEffect(() => {
    GET_ALL(`products`).then((item) => setProducts(item.data));
    GET_ID(`products`, productId).then((item) => setProduct(item.data));
  }, [productId]);
  return (
    <section>
      <section className="py-3 bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a>{product.category && product.category.name}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </div>
      </section>
      <section className="section-content bg-white padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-6">
              <div className="card">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <div>
                      <a href="#">
                        <img src={`./images/items/${product.thumbnail}`} />
                      </a>
                    </div>
                  </div>
                  <div className="thumbs-wrap">
                    <a href="#" className="item-thumb">
					<img src={`./images/items/${product.thumbnail}`} />
                    </a>
                   
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2 className="title mt-3">{product.title} </h2>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li jstyle={cardTextStyle} className="stars-active">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <small className="label-rating text-muted">132 reviews</small>
                  <small className="label-rating text-success">
                    <i className="fa fa-clipboard-check"></i> 154 orders{" "}
                  </small>
                </div>
                <div className="mb-3">
                  <var className="price h4">{product.price}</var>
                  <span className="text-muted">USD</span>
                </div>
                <p>
                {product.description}
                </p>
                <ul className="navbar-nav ml-md-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  data-toggle="dropdown"
                >
                 Size
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    XL
                  </a>
                  <a className="dropdown-item" href="#">
                    X
                  </a>
                  <a className="dropdown-item" href="#">
                    L
                  </a>
                  <a className="dropdown-item" href="#">
                    M
                  </a>
                </div>
              </li>
            </ul>
                <dl className="row">
                  <dt className="col-sm-3">Danh mục</dt>
                  <dd className="col-sm-9">
                  <a>{product.category && product.category.name}</a>
                  </dd>
              
                </dl>
                <div className="form-row mt-4">
                  <div className="form-group col-md flex-grow-0">
                    <div className="input-group mb-3 input-spinner">
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-plus"
                        >
                          +{" "}
                        </button>
                      </div>
                      <input type="text" className="form-control" value="1" />
                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-minus"
                        >
                          &minus;{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group col-md">
                    <a href="profile/order" className="btn btn-primary">
                      <i className="fas fa-shopping-cart"></i>{" "}
                      <span className="text">Add to cart</span>
                    </a>
                    <a href="#" className="btn btn-light">
                      <i className="fas fa-envelope"></i>{" "}
                      <span className="text">Contact supplier</span>
                    </a>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
      <section className="section-name padding-y bg">
        <div className="container">
          
              <h5 className="title-description">Đánh giá</h5>
              
             
              <h5 className="title-description">Sản phẩm tương tự</h5>
              <div className="row">
        {products.length > 0 &&
          products.map((row) => (
            <div className="col-xl-3 col-lg-3 col-md-4 col-6" key={row.id}>
              <div className="card card-product-grid">
                <Link
                  to={`/detailProduct?productId=${row.id}`}
                  className="img-wrap"
                >
                  <img src={`./images/items/${row.thumbnail}`} />{" "}
                </Link>
                <figcaption className="info-wrap">
                  <div>
                    <Link
                      to={`/detailProduct?productId=${row.id}`}
                      className="title"
                    >
                      {row.title}
                    </Link>
                  </div>
                  <div className="price h5 mt-2">${row.price}</div>
                </figcaption>
              </div>
            </div>
          ))}
      </div>
             
            </div>
           
          
        
      </section>
    </section>
  );
};

export default Content;
