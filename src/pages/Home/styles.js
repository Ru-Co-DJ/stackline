import { css } from "@emotion/css"

const classes = () => ({

  btns: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  items: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left:30px;
    margin-right:30px;
  `,
  rows: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 50px;
  `,
  cols: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `

})

export default classes
