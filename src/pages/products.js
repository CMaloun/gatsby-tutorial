import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

export default () => (
    <Layout>

            <Link to="/">Index</Link>
            <h1 className={styles.title}>Products page</h1>

    </Layout>
)