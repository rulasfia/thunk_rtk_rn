# RTK Query for Server State Management

## Data Flow Comparison

![image.png](./files/image.png)  
![image.png](./files/image_5.png)

###

## Other Comparison

![s_118F96EA7D62F679A47C2AD439C93DC9203009C47C6538B354532E5ADE3FA23F_1676627146090_redux-graphs.png](./files/s_118f96ea7d62f679a47c2ad439c93dc9203009c47c6538.png)

### Const - Thunk

- A lot of boilerplate code
- Designed for delayed or asynchronous action
- Need to manually retrieve data and request status from the store
- Manual refetching after user mutation
- Hard to get type safety right
- Overall larger code needed

### Pros - RTK

- Simpler setup
- Designed and built for async state management
- Request status included with data from custom hooks
- Auto revalidation on user mutation
- Easier type safety
- Overall larger code needed

### Reference:

- RTK Query Docs: [https://redux-toolkit.js.org/rtk-query/overview](https://redux-toolkit.js.org/rtk-query/overview)
- Understand the RTK Query Mental Model Compared to Redux Thunks: [https://egghead.io/lessons/redux-understand-the-rtk-query-mental-model-compared-to-redux-thunks](https://egghead.io/lessons/redux-understand-the-rtk-query-mental-model-compared-to-redux-thunks)
