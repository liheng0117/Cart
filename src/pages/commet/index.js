import React, { Component } from 'react'
import axios from 'axios'
import api from '../../services/api'
import './style.less'

export default class index extends Component {
    state={
        commet:[]
    }
    componentDidMount(){
        axios.get(api.commet).then(nbb=>{
            this.setState({
               commet:nbb.data.data
            })
        })
    }
    render() {
        const { commet } =this.state
        return (
            <section>
            <div className='commet-made'>
            <div className='commet-head'>
            商品评价({commet.length})
            </div>
            <div className='commet_detail'>
            {
                commet?commet.map((v,i)=>{
                    return (
                        <div key={i} className='commet-cmmit' >
                        <div className='commet-Top'><p className='commet-img'><img src={v.head} /></p>{v.nickname}</div>
                        <div className='commet-content'>{v.content}</div>
                        <div>{v.times}</div>
                        </div>
                    )
                }):null
            }
            </div>
            </div>
            </section>
        )
    }
}
