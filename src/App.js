import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2 col-4">
            <a href="#">Company Name</a>
            </div>
            <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                    <div class="input-group w-100">
                        <input type="text" class="form-control" placeholder="Search" />
                        <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                        </div>
                    </div>
                </form> 
            </div> 
            <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                        <span class="badge badge-pill badge-danger notify">0</span>
                    </div>
                    <div class="widget-header icontext">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                        <div class="text">
                            <span class="text-muted">Welcome!</span>
                            <div> 
                                <a href="#">Sign in</a> |  
                                <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
        
                </div> 
            </div>
        </div>
            </div> 
        </section> 
        </header> 
        
        <section class="section-pagetop bg">
        <div class="container">
            <h2 class="title-page">Shopping cart</h2>
        </div> 
        </section>
        
        <section class="section-content padding-y">
        <div class="container">
        
        <div class="row">
            <main class="col-md-9">
        <div class="card">
        
        <table class="table table-borderless table-shopping-cart">
        <thead class="text-muted">
        <tr class="small text-uppercase">
        <th scope="col">Product</th>
        <th scope="col" width="120">Quantity</th>
        <th scope="col" width="120">Price</th>
        <th scope="col" class="text-right" width="200"> </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/1.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Some name of item goes here nice</a>
                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                    <option>4</option>  
                </select> 
                <a href="" class="btn btn-light"> + </a>
                <a href="" class="btn btn-light"> - </a>
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$1156.00</var> 
                 
                </div> 
            </td>
            <td class="text-right"> 
            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
            <a href="" class="btn btn-light"> Remove</a>
            </td>
        </tr>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/2.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Product name  goes here nice</a>
                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                    <option>4</option>  
                </select> 
                <a href="" class="btn btn-light"> + </a>
                <a href="" class="btn btn-light"> + </a>
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$149.97</var> 
                     
                </div> 
            </td>
            <td class="text-right"> 
            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
            <a href="" class="btn btn-light btn-round"> Remove</a>
            </td>
        </tr>
        <tr>
            <td>
                <figure class="itemside">
                    <div class="aside"><img src="assets/images/items/3.jpg" class="img-sm" /></div>
                    <figcaption class="info">
                        <a href="#" class="title text-dark">Another name of some product goes just here</a>
                        <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>  
                    <option>3</option>  
                </select> 
                <a href="" class="btn btn-light"> + </a>
                <a href="" class="btn btn-light"> - </a>
            </td>
            <td> 
                <div class="price-wrap"> 
                    <var class="price">$98.00</var> 
                     
                </div> 
            </td>
            <td class="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                <a href="" class="btn btn-light btn-round"> Remove</a>
            </td>
        </tr>
        </tbody>
        </table>
        
        <div class="card-body border-top">
            <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
            <a href="#" class="btn btn-primary">  Clear Cart </a>
        </div>  
        </div> 
        
         
        
            </main>
            <aside class="col-md-3">
                <div class="card mb-3">
                    <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Have coupon?</label>
                            <div class="input-group">
                                <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                <span class="input-group-append"> 
                                    <button class="btn btn-primary">Apply</button>
                                </span>
                            </div>
                        </div>
                    </form>
                    </div> 
                </div>  
                <div class="card">
                    <div class="card-body">
                            <dl class="dlist-align">
                            <dt>Total price:</dt>
                            <dd class="text-right">USD 568</dd>
                            </dl>
                            <dl class="dlist-align">
                            <dt>Discount:</dt>
                            <dd class="text-right">USD 658</dd>
                            </dl>
                            <dl class="dlist-align">
                            <dt>Total:</dt>
                            <dd class="text-right  h5"><strong>$1,650</strong></dd>
                            </dl>
                            <hr />
                            <p class="text-center mb-3">
                                <img src="assets/images/misc/payments.png" height="26" />
                            </p>
                            
                    </div> 
                </div>  
            </aside> 
        </div>
        
        </div> 
        </section>
       
       
       
     
    </div>
  );
}
export default App;
