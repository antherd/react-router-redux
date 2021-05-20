import {handleActions} from 'redux-actions';

const initialState = {
    planList: [
        {
            title: '计划一',
            content: '吃饭'
        },
        {
            title: '计划二',
            content: '睡觉'
        },
        {
            title: '计划三',
            content: '打豆豆'
        }
    ],
};

const plan = handleActions({
    'DELETE_PLAN': (state, action) => {
        const { planList } = state;
        const indexParam = action.payload;
        const newPlanList = planList.filter((e, index) => {
            return index !== indexParam;
        });
        return {
            ...state,
            planList: newPlanList,
        }
    },
    'ADD_PLAN': (state, action) => {
        const { planList } = state;
        const item = action.payload;
        planList.push(item);
        return {
            ...state,
            planList: planList.concat(),
        }
    },
}, initialState)

export default plan;
