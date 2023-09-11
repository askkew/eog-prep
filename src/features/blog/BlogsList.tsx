import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllBlogs } from './blogSlice'
import { Button, Card, FormControl, TextField } from '@mui/material'
import styled from '@emotion/styled'
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

// =============== Styles =================
const NewBlogContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '1em',
  border: '2px solid gainsboro',
  borderRadius: '12px',
  gap: '0.5em',
  width: 'clamp(150px, 80%, 350px)',
  height: '250px',
})

const CustomTextField = styled(TextField)({
  width: '100%',
})

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
  marginTop: '1em',
})

const customTheme = (outerTheme: any) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(255, 255, 255, 0.85)', // Change border color to white
            '--TextField-brandBorderHoverColor': '#B2BAC2', // Change hover border color (if needed)
            '--TextField-brandBorderFocusedColor': '#6F7E8C', // Change focused border color (if needed)
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& $notchedOutline': {
              borderColor: 'var(--TextField-brandBorderColor)', // Change border color to white
            },
            '&:hover $notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)', // Change hover border color (if needed)
            },
            '&.Mui-focused $notchedOutline': {
              borderColor: 'var(--TextField-brandBorderFocusedColor)', // Change focused border color (if needed)
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: 'white', // Change text color to white
          },
        },
      },
    },
  });
// ========================================


const BlogsList = () => {
  const outerTheme = useTheme();

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
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <BlogGrid>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <NewBlogContainer>
              <CustomTextField variant="outlined" placeholder="Enter blog title" id="mui-theme-provider-outlined-input" />
              <CustomTextField variant="outlined" placeholder="Enter blog content" id="mui-theme-provider-outlined-input" multiline rows={5}/>
              <Button variant="contained"> Submit </Button>
            </NewBlogContainer>
          </ThemeProvider>
          {renderedBlogs}
        </BlogGrid>
      </SimpleBar>
    </section>
  )
}

export default BlogsList