import React, { Component } from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'
import LoadingAnimation from '../../components/loadingAnimation'
import Filter from './components/Filter'
import styles from './stylesheets/dashboard.module.sass'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts()
    }
  }
  render() {
            const { products, applyFilters } = this.props
            console.log(products)
            return (
            <div className={styles.outbox}>
            {/* Header */}
            <HeaderContainer />
            <div className={styles.box}>
            {/* loading animation */}
            {this.props.loading &&
            <LoadingAnimation />
          }
          {/* filter */}
          <div className={styles.filter}>
            <Filter
              applyFilters={applyFilters}
            />
          </div>
          {/* products */}
          {/* products */}

          <div className={`row ${styles.products}`}>
            {products && products.map(p =>
              <div
                key={p.title}
                className={`col-6 col-sm-6 col-md-6 col-lg-1 my-1 ${styles.product}`}

                onClick={() => this.props.history.push(`/product-overview/${p._id}`)}>
                  <Product
                  title={p.title}
                  price={`$${p.price} CAD`}
                  color={p.color}
                  image={p.imagePath}
                  //image={'www.google.com/search?rlz=1C1CHWL_enHK878HK878&biw=1280&bih=631&tbm=isch&sa=1&ei=t6n9XZu7DJKHoATf-p7gAw&q=images+download&oq=images+downlaod&gs_l=img.3.0.0i10i19j0i8i30i19l2j0i8i10i30i19j0i8i30i19.106021.107681..108593...0.0..0.185.1948.0j11......0....1..gws-wiz-img.......0j0i30j0i19.fXJive4FoZ8#imgrc=_'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}





