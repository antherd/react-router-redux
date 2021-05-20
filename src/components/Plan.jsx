import React from 'react';
import './Plan.scss';

class Plan extends React.Component {
    state = {
        'title': '',
        'content': '',
    }
    addPlanInner = () => {
        const { title, content } = this.state;
        if (title && content) {
            const { planActions } = this.props;
            const { addPlan } = planActions;
            addPlan(this.state);
            this.setState({
                title: '',
                content: ''
            })
        }
    }
    render() {
        const { planList, planActions } = this.props;
        const { deletePlan } = planActions;
        return (
            <div>
                <div className="plan">
                    <h3>计划表</h3>
                </div>
                <table className="plan-table">
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>内容</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        { planList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td><button type='delete' onClick={() => deletePlan(index)}>删除</button></td>
                            </tr>
                        )})
                        }
                        <tr key={planList.length}>
                            <td><input
                                className='plan-input'
                                placeholder="标题"
                                onChange={(e)=>{this.setState({
                                    title: e.target.value
                                })}}/></td>
                            <td><input
                                className='plan-input'
                                placeholder="内容"
                                onChange={(e)=>{this.setState({
                                    content: e.target.value
                                })}}/></td>
                            <td><button type='delete' onClick={this.addPlanInner}>添加</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Plan;
