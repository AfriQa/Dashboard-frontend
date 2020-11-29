import React, { useState, useEffect }from "react"
import { connect } from "react-redux"
import {
    selectFetchStatus, fetchProducts
} from "./ProductState"
import status from "../../constants/reduxStatus"

const ProductContent = ({ fetchProducts, fetchStatus }) => {
    const [fetchLock, setFetchLock] = useState(false)

    useEffect(() => {
        fetchProducts()
        setFetchLock(false)
    }, [setFetchLock, fetchProducts])

    useEffect(() => {
        if (fetchStatus.status === status.success && !fetchLock) {
            setFetchLock(true)
        }
    }, [setFetchLock, fetchStatus])

    return <></>
}

const mapStateToProps = state => ({
    fetchStatus: selectFetchStatus(state)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent)