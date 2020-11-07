import React, { useState, useEffect }from 'react'
import Products from "./ProductListView"
import {
  fetchProducts, selectProducts, selectFetchStatus, selectAddStatus
} from "../../../redux/States/Products"
import {
    fetchProductCategories, selectProductCategories, selectFetchStatus as selectCategoryFetchStatus
} from "../../../redux/States/ProductCategories"
import { connect } from "react-redux"
import { reduxStatus } from "../../../constants/reduxStatus"

const Loader = ({
  fetchStatus, addStatus, fetchProducts, products,
  fetchCategoryStatus, categories, fetchProductCategories
}) => {
  const [fetchLock, setFetchLock] = useState(true)
  const [addLock, setAddLock] = useState(true)
  const [fetchCategoryLock, setFetchCategoryLock] = useState(true)

  // Fetch Products
  useEffect(() => {
    setFetchLock(false)
    fetchProducts()
  }, [fetchProducts, setFetchLock])

  useEffect(() => {
    const { status } = fetchStatus
    if (status === reduxStatus.failure && !fetchLock) {
      console.error("Failed fetching products")
    }

    setFetchLock(true)
  }, [fetchStatus, setFetchLock, fetchLock])

  // Fetch Categories
  useEffect(() => {
    setFetchCategoryLock(false)
    fetchProductCategories()
  }, [fetchProductCategories, setFetchCategoryLock])

  useEffect(() => {
    const { status } = fetchCategoryStatus
    if (status === reduxStatus.failure && !fetchCategoryLock) {
      console.error("Failed fetching product categories")
    }

    setFetchCategoryLock(true)
  }, [fetchCategoryStatus, setFetchCategoryLock, fetchCategoryLock])

  useEffect(() => {
    const { status } = addStatus
    if (status === reduxStatus.failure && !addLock) {
      console.error("Failed adding customer")
    }
  }, [addStatus, setAddLock, addLock])

  const _addProduct = data => {
    setAddLock(false)
    console.log(data)

  }

  return (
    <Products
      products={products}
      categories={categories}
    />
  )
}

const mapStateToProps = state => ({
  products: selectProducts(state),
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  categories: selectProductCategories(state),
  fetchCategoryStatus: selectCategoryFetchStatus(state),
})

const mapDispatchToProps = dispatch => ({
  fetchProducts : () => dispatch(fetchProducts()),
  fetchProductCategories: () => dispatch(fetchProductCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)