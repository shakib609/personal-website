import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from './Theming'
import MobileNav from './MobileNav'
import { bpMaxXS } from '../lib/breakpoints'
// import ThemeToggler from './ThemeToggler'

import Container from './Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: white;
              &:hover {
                color: white;
                text-decoration: none;
              }
            `}
          >
            {siteTitle}
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: white;
                padding: 8px 10px;
                margin-right: 10px;
                &:last-child {
                  margin-right: 0;
                }
                &:hover {
                  background: rgba(40, 28, 77, 0.7);
                  border-radius: 5px;
                  text-decoration: none;
                  color: white;
                }
              }
              .active {
                background: rgba(40, 28, 77, 0.7);
                border-radius: 5px;
              }
            `}
          >
            <MobileNav />
            <nav
              css={css`
                ${bpMaxXS} {
                  display: none;
                }
              `}
            >
              <Link
                to="/blog"
                activeClassName="active"
                aria-label="View blog page"
              >
                Blog
              </Link>
              {/* <Link
                to="/projects"
                activeClassName="active"
                aria-label="View projects page"
              >
                Projects
              </Link> */}
              <Link
                to="/about"
                activeClassName="active"
                aria-label="View about page"
              >
                About
              </Link>
            </nav>
            {/* <ThemeToggler
              css={{}}
              toggleTheme={theme.toggleTheme}
              themeName={theme.themeName}
            /> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
