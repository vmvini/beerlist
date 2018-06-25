import styled from 'styled-components';

export const ListContainer = styled.div`
  
  width: 100%;
  padding: 0;
  margin: 0;

  ul:nth-child(odd) {
    background-color:#ddd;
  }
  
  ul:nth-child(even) {
    background-color:#fff;
  }
  
  
  @media screen and (min-width:600px) {
    display:table;

    ul {
      display:table-row;
    }

    ul:first-child li {
      background-color:#444;
      color:#fff;
    }

    ul > li {
      display:table-cell;
      padding:.5em 1em;
    }
  
  }

  @media screen and (max-width:599px) {
    ul {
      border:solid 1px #ccc;
      display:block;
      list-style:none;
      margin:1em;
      padding:.5em 1em;
    }

    ul:first-child {
      display:none;
    }

    ul > li {
      display:block;
      padding:.25em 0;
    }

    ul:nth-child(odd) > li + li {
      border-top:solid 1px #ccc;
    }

    ul:nth-child(even) > li + li {
      border-top:solid 1px #eee;
    }

    ul > li:before {
      color:#000;
      content:attr(data-label);
      display:inline-block;
      font-size:75%;
      font-weight:bold;
      text-transform:capitalize;
      vertical-align:top;
      width:50%;
    }

    @media screen and (max-width:349px) {
      ul > li:before {
        display:block;
      }
    }

  }
`;
