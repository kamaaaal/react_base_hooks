# Learning react from meta frontend developer - react basics

## state management docs for

+ **react useContext api**
    * context providers are stored in providers file and the provider file will export provider and context, which will be consumed by contect provider

    * for this we will have an example where a logged in user data is required by multiple components
---
+ **react  useReducer**
    * reducer is like use state , but doesn\'t allow to set value directly
    * instead wehn creating useReaducer we will pass reducer function and an initial state
    * the reducer function is acepts a current state and action 
    * with which the reducer function will create and return a new object upon the action
    * usereducer hook will returns a tuple of [state, and a dispatch function] the dispatch function can be called on any event
    * the dispatch function accepts an argument of action object of type which was declared in reducer function
    * **carReducer component exaplains the useReducer**
 




