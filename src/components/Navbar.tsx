import styled from '@emotion/styled'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgb(34,37,45)',
  padding: '0px 60px 0px 60px',
  width: '100vw',
})

const NavButton = styled(Link)({
  margin: '20px',
  color: 'gainsboro',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
    cursor: 'pointer',
  }
})

const Navbar = () => {
  return (
    <>
      <NavBar>
        <NavButton to="/home">Home</NavButton>
        <NavButton to="/blog">Blog</NavButton>
        <NavButton to="/counter">Counter</NavButton>
        <NavButton to="/stockchart">Stocks</NavButton>
      </NavBar>
      <Outlet />
    </>
  )
}

export default Navbar