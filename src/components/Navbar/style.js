import { css } from "@emotion/css"

const useStyle = () => ({
    tool:
        css`
            max-width:100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        `,
    items:
        css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
    `,
    item: css`
        padding:5px;
        margin:7px;
        cursor: pointer;
        &:hover{
            color: #e76581;
            text-shadow: 0px 0px 2px #e76581;
        }
    `,
    sign:
        css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    `,
    scrollbtn: css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 10;
    background-color: #e76581;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 5px 5px 9px rgba(0,0,0,0.3);
  `
})

export default useStyle