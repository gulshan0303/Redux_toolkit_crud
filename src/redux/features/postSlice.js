import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

       //Get Data
export const getPost = createAsyncThunk("post/getPosts", async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    
})

    //Delete data
export const deletePost = createAsyncThunk("post/deletePost", async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    
})

    //create data

    export const createPost = createAsyncThunk("post/createPost", async ({values}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method:"POST",
            headers:{
                Accept:'application/json',
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                title: values.title,
                body: values.body,
              }),
        })
        .then(res => res.json())
        
    })


    //Update data

    export const updatePost = createAsyncThunk("post/updatePost", async ({id,title,body}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:"PUT",
            headers:{
                Accept:'application/json',
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                title,
                body 
              }),
        })
        .then(res => res.json())
        
    })

const PostSlice = createSlice({
    name:"post",
    initialState:{
        loading:false,
        post:[],
        error:null,
        body:"",
        edit:false
    },
    reducers: {
       setEdit: (state,action) => {
            state.body = action.payload.body;
            state.edit = action.payload.edit
       }
    },
    extraReducers:{
             //get
        [getPost.pending]:(state,action) =>{
            state.loading = true;
            
        },
        [getPost.fulfilled]:(state,action) => {
            state.loading = false;
            state.post = [action.payload];
        },

        [getPost.rejected]:(state,action )=>{
            state.loading = false;
            state.error = action.payload;
        },
              
            // Delete
        [deletePost.pending]:(state,action) =>{
            state.loading = true;
            
        },
        [deletePost.fulfilled]:(state,action) => {
            state.loading = false;
            state.post = action.payload;
        },

        [deletePost.rejected]:(state,action )=>{
            state.loading = false;
            state.error = action.payload;
        },

          //create

          [createPost.pending]:(state,action) =>{
            state.loading = true;
            
        },
        [createPost.fulfilled]:(state,action) => {
            state.loading = false;
            state.post = [action.payload];
        },

        [createPost.rejected]:(state,action )=>{
            state.loading = false;
            state.error = action.payload;
        },


        //update 
        [updatePost.pending]:(state,action) =>{
            state.loading = true;
            
        },
        [updatePost.fulfilled]:(state,action) => {
            state.loading = false;
            state.post = [action.payload];
        },

        [updatePost.rejected]:(state,action )=>{
            state.loading = false;
            state.error = action.payload;
        },
    }
});
export const {setEdit} = PostSlice.actions;
export default PostSlice.reducer;