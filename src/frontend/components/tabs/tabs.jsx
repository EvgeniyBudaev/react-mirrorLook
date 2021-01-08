import React, {useEffect, useState} from 'react'
import cn from 'classnames'

import styles from './tabs.module.scss'
import {ROUTES} from "../../routes";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {currentCategory} from "../../redux/actions/actions";


const Tabs = ({tabs, currentCategory}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [currentContent, setCurrentContent] = useState(null)


    const {content} = tabs[activeTab]

    useEffect(() => {
        setCurrentContent(content)
        currentCategory(currentContent)
    }, [content, currentCategory, currentContent])

    console.log('content', content)
    return (
        <>
            <NavLink to={ROUTES.CATALOG}>
                <ul className={styles.headerCategories}>
                    {tabs.map(({title}, index) => (
                        <li
                            key={title}
                            className={cn(styles.item, {[styles.active]: index === activeTab})}
                            onClick={() => setActiveTab(index)}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </NavLink>
        </>
    )
}

const mapStateToProps = state => ({
    category: state.categoryReducer
})

const mapDispatchToProps = ({
    currentCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)

