import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllBlogs } from './blogSlice'
import { Button, Card, FormControl, TextField } from '@mui/material'
import styled from '@emotion/styled'

// =============== Styles =================
const EnterBlogContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '1em',
  border: '2px solid gainsboro',
  borderRadius: '12px',
  width: 'clamp(150px, 80%, 350px)',
  height: '250px',
  '& h3': {
    margin: 0,
    fontSize: 'xxlarge',
    textAlign: 'left',
  },
  '& p': {
    margin: 0,
    fontSize: 'large',
    textAlign: 'left',
  }
})

const BlogGrid = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  gap: '2em',
  width: '100vw',
})
// ========================================


const BlogsList = () => {

  const blogs = useSelector(selectAllBlogs)

  const renderedBlogs = blogs.map((blog: any) => {
    return (
      <EnterBlogContainer key={blog.id}>
        <h3>{blog.title}</h3>
        { blog.content?.length > 100 ? <p>{blog.content?.substring(0,100) + " ..."}</p> : <p>{blog.content}</p> }
      </EnterBlogContainer>
    )
  })

  return (
    <section id="blogsection">
      <h2>Insert a new blog!</h2>
      <FormControl>
        <TextField></TextField>
        <Button variant="contained"> Submit </Button>
      </FormControl>
      <h2>Blogs</h2>
      <BlogGrid>
        {renderedBlogs}
      </BlogGrid>
    </section>
  )
}

export default BlogsList