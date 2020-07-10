import React from 'react';
import { Header ,Cards , Charts} from './components';
import {fetchData} from './api';
import styles from './App.module.css'

class app extends React.Component {
    state = {
        data:{}
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({ data });
    }
    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Header />
                <Cards data={data}/>
                <Charts/>
            </div>
        )
    }
}

export default app