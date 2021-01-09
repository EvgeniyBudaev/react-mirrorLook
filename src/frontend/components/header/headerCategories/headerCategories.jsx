import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'
import {connect} from "react-redux";
import Tabs from "../../tabs";
import CardsList from "../../catalog/catalogContent/cardsList";
import {categoriesListSelector} from "../../../redux/selectors";


const HeaderCategories = (props) => {
    console.log('[HeaderCategories][props]', props)
    const {categories} = props

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

export default connect(mapStateToProps)(HeaderCategories)


