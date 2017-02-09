import { $v } from 'graphcool-styles'
import { injectGlobal } from 'styled-components'
import { breakpoints } from './utils/constants'

// tslint:disable-next-line
injectGlobal`
  
  @media (max-width: ${breakpoints.p500}px) {
    #sk-holder {
      display: none;
    }
    
    #sk-holder #sk-messenger-button svg path {
      display: none;
    }
  }
  
  #sk-holder #sk-messenger-button svg path {
    filter: url("#dropShadow") !important;    
  }
  
  body {
    color: ${$v.gray80};
  }
  
  h1 {
    font-size: ${$v.size25};
    font-weight: 300;
  
    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size30};
    }
    
    @media (min-width: ${breakpoints.p1200}px) {
      font-size: ${$v.size32};
    }
    
    @media (min-width: ${breakpoints.p1440}px) {
      font-size: ${$v.size38};
    }
  }
  
  h2 {
    font-size: ${$v.size25};
    font-weight: 300;
    
    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size30};
    }
    
    @media (min-width: ${breakpoints.p1200}px) {
      font-size: ${$v.size32};
    }
  }
  
  h3 {
    font-size: ${$v.size20};
    font-weight: 300;
    
    @media (min-width: ${breakpoints.p500}px) {
      font-size: ${$v.size25};
    }
  }
  
  h4 {
    font-size: ${$v.size16};
    font-weight: 400;
    
    @media (min-width: ${breakpoints.p500}px) {
      font-size: ${$v.size20};
      font-weight: 300
    }
  }
  
  p {
    font-size ${$v.size16};

    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size20};
      font-weight: 300;
    }
  }
  
  pre {
    font-size: ${$v.size16};
  }
  
  code {
    font-size: ${$v.size16};
    line-height: 1.5;
  }
`
