import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'
import {connect} from "react-redux";
import Tabs from "../../tabs";
import CardsList from "../../catalog/catalogContent/cardsList";
import {categoriesListSelector} from "../../../redux/selectors";
import {loadCategories} from "../../../redux/actions/actions";
import Loader from "../../loader";


const HeaderCategories = (props) => {
    console.log('[HeaderCategories][props]', props)
    const {categories, loadCategories} = props

    useEffect(() => {
        loadCategories()
    }, [])

    if (categories.length === 0) return <Loader />

    const tabs = categories.map((category) => ({
        title: category.name,
        content: category,
    }))


  return (
    <>
        <Tabs tabs={tabs} />
    </>
  )
}

const mapStateToProps = (state) => ({
    categories: categoriesListSelector(state),
})

export default connect(mapStateToProps, {loadCategories})(HeaderCategories)


